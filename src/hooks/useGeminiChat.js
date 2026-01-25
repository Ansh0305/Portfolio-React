import { useState, useCallback, useRef } from 'react';
import Groq from 'groq-sdk';
import { generateSystemPrompt } from '../data/portfolioContext';

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const useGeminiChat = () => {
  //STATE MANAGEMENT 
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contactState, setContactState] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Store conversation history for context
  const conversationHistoryRef = useRef([]);
  // Store Groq client
  const groqClientRef = useRef(null);

  const initializeGroq = useCallback(() => {
    if (!API_KEY) {
      setError('Groq API key not found. Please add VITE_GROQ_API_KEY to your .env file.');
      return null;
    }

    try {
      const client = new Groq({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true
      });
      
      groqClientRef.current = client;
      return client;
    } catch (err) {
      setError('Failed to initialize Groq. Please check your API key.');
      console.error('Groq init error:', err);
      return null;
    }
  }, []);

  // SEND MESSAGE
  
  const sendMessage = useCallback(async (userMessage) => {
    if (!userMessage.trim()) return;
    
    setError(null);
    setIsLoading(true);
    
    // Add user message to UI immediately
    const userMsg = {
      role: 'user',
      content: userMessage,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, userMsg]);
    
    // Add to conversation history for API
    conversationHistoryRef.current.push({
      role: 'user',
      content: userMessage
    });
    
    try {
      // Get or create Groq client
      let client = groqClientRef.current;
      if (!client) {
        client = initializeGroq();
        if (!client) {
          setIsLoading(false);
          return;
        }
      }
      
      const response = await client.chat.completions.create({
        model: 'llama-3.3-70b-versatile',  // Fast and capable!
        messages: [
          {
            role: 'system',
            content: generateSystemPrompt()
          },
          ...conversationHistoryRef.current
        ],
        temperature: 0.7,
        max_tokens: 500
      });
      
      const text = response.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
      
      // Check for contact collection triggers
      if (text.includes('CONTACT_STEP:')) {
        handleContactStep(text);
      }
      
      // Add to conversation history
      conversationHistoryRef.current.push({
        role: 'assistant',
        content: text
      });
      
      // Add AI response to UI
      const assistantMsg = {
        role: 'assistant',
        content: text.replace(/CONTACT_STEP:\w+/g, '').trim(),
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, assistantMsg]);
      
    } catch (err) {
      // Show a friendly error message (no console logs, no special styling)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Oops! Something went wrong. Please try again in a moment. 😅',
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [initializeGroq]);

  //CONTACT COLLECTION 
  const handleContactStep = (text) => {
    if (text.includes('name_received')) {
      setContactState('email');
    } else if (text.includes('email_received')) {
      setContactState('message');
    } else if (text.includes('complete')) {
      setContactState('complete');
    }
  };

  const startContactFlow = useCallback(() => {
    setContactState('name');
    setContactInfo({ name: '', email: '', message: '' });
  }, []);

  const updateContactInfo = useCallback((field, value) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetContactFlow = useCallback(() => {
    setContactState(null);
    setContactInfo({ name: '', email: '', message: '' });
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
    conversationHistoryRef.current = [];
    setError(null);
    resetContactFlow();
  }, [resetContactFlow]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
    contactState,
    contactInfo,
    startContactFlow,
    updateContactInfo,
    resetContactFlow
  };
};
