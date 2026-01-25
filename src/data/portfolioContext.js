export const portfolioData = {
  name: "Sirigiri Sai Ansh Raj",
  nickname: "Ansh",
  role: "Full Stack Developer",
  
  // Short intro for the AI to use
  introduction: `A passionate full stack developer specializing in React and modern web tech. 
  I love building sleek, responsive apps and solving challenging problems through clean code 
  and smart algorithms. Currently pursuing B.Tech in Computer Science.`,
  
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Swami Vivekananda Institute of Technology, Hyderabad",
      duration: "2022-2026",
      cgpa: "8.01 (currently)"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      duration: "2020-2022",
      percentage: "75%"
    },
    {
      degree: "High School",
      institution: "Sankara Vidyalaya, Hyderabad",
      duration: "2020",
      percentage: "90%"
    }
  ],
  
  skills: {
    frontendSkills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI", "Shadcn UI"],
    backendSkills: ["Node.js", "Express.js", "Rest API's"],
    databaseSkills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    languages: ["Java", "JavaScript", "TypeScript", "Python"],
    tools: ["Git", "GitHub", "Gitlab", "Postman"],
  },
  
  workExperience: [
    {
      role: "Tech Developer Intern",
      company: "Murb",
      duration: "November 2025 - Present",
      description: `Replicated 6+ UI sections of MURB’s official website, focusing on visual consistency and reusable components. Delivered responsive UI components compatible across desktop and mobile devices using React, TypeScript,
      Tailwind CSS, and Lucide icons. Collaborated in a 5-member team to build frontend features supporting MURB’s expansion into the
      e-commerce/merchandise domain`
    },
    {
      role: "Frontend Web Development Intern",
      company: "Motion Cut",
      duration: "October 2024 - November 2024",
      description: `Built user-focused web applications with emphasis on performance and UX optimization. 
      Developed responsive web interfaces using modern frontend technologies and frameworks.`
    },
    {
      role: "Software Development Intern",
      company: "Swecha Telangana",
      duration: "May 2024 - June 2024",
      description: `Developed local language-to-English translation system using Python, NumPy, 
      and AI/ML algorithms. Collected and processed real-time local language datasets to train 
      machine learning models. Contributed to open-source language technology project.`
    },
  ],
  
  projects: [
    {
      name: "IndiCamp",
      description: `A full-stack campground discovery platform where users can create, explore, 
      and review camping sites. Features interactive maps, secure authentication, cloud image 
      storage, and community reviews.`,
      tech: ["HTML", "CSS", "JavaScript", "EJS", "Bootstrap", "Node.js", "MongoDB"],
      liveLink: "https://indicamp.onrender.com/",
      githubLink: "https://github.com/Ansh0305/CampGround"
    },
    {
      name: "MovieHub",
      description: `A movie discovery app using TMDB API to fetch popular and searched movies. 
      Features movie posters, rankings, debounced search, and backend analytics integration with Appwrite.`,
      tech: ["Vite + React", "CSS", "JavaScript", "Appwrite", "TMDB-API"],
      liveLink: "https://moviehuby.netlify.app/",
      githubLink: "https://github.com/Ansh0305/MovieHub"
    },
    {
      name: "AI-EmailGenerator",
      description: `A web application that uses Large Language Models to generate professional 
      email drafts from simple user prompts.`,
      tech: ["React", "Node.js", "TailwindCSS"],
      githubLink: "https://github.com/Ansh0305/AI-EmailGenerator"
    },
    {
      name: "Buyza",
      description: `Buyza is a full-stack e-commerce web application designed to deliver a smooth and user-friendly online shopping experience. It features product browsing, filtering, cart management, and secure checkout with an emphasis on clean UI, performance, and scalability. The project demonstrates modern web development practices and a focus on usability and real-world e-commerce functionality.`,
      tech: ["Nextjs", "TailwindCSS", "TypeScript", "PostgreSQL", "Shadcn UI", "Stripe", ""],
      githubLink: "https://github.com/Ansh0305/Buyza"
    }
  ],
  
  contact: {
    github: "https://github.com/Ansh0305",
    linkedin: "https://linkedin.com/in/anshsirigiri"
  }
};

export const generateSystemPrompt = () => {
  const data = portfolioData;
  
  return `You are a friendly and professional AI assistant for ${data.nickname}'s portfolio website. 
Your job is to help visitors learn about ${data.nickname} and his work.

## WHO YOU REPRESENT:
- Name: ${data.name} (goes by "${data.nickname}")
- Role: ${data.role}
- Bio: ${data.introduction}

## EDUCATION:
${data.education.map(edu => `- ${edu.degree} at ${edu.institution} (${edu.duration})${edu.cgpa ? ` - CGPA: ${edu.cgpa}` : edu.percentage ? ` - ${edu.percentage}` : ''}`).join('\n')}

## SKILLS:
- Programming Languages: ${data.skills.programmingLanguages.join(', ')}
- Web Development: ${data.skills.webDevelopment.join(', ')}
- Databases: ${data.skills.databases.join(', ')}

## WORK EXPERIENCE:
${data.workExperience.map(exp => `### ${exp.role} at ${exp.company} (${exp.duration})
${exp.description}`).join('\n\n')}

## PROJECTS:
${data.projects.map(proj => `### ${proj.name}
${proj.description}
Technologies: ${proj.tech.join(', ')}
${proj.liveLink ? `Live: ${proj.liveLink}` : ''}
GitHub: ${proj.githubLink}`).join('\n\n')}

## CONTACT INFO:
- GitHub: ${data.contact.github}
- LinkedIn: ${data.contact.linkedin}

## YOUR BEHAVIOR GUIDELINES:
1. Be friendly, helpful, and conversational
2. Keep responses concise but informative (2-3 paragraphs max)
3. Use emojis occasionally to be friendly 😊
4. If asked about something not in the context, politely say you don't have that information
5. Encourage visitors to check out ${data.nickname}'s projects and connect with him

## CONTACT COLLECTION FLOW:
When someone wants to contact ${data.nickname} or leave a message:
1. First, acknowledge their interest warmly
2. Ask for their name
3. Then ask for their email
4. Finally, ask what message they'd like to send
5. Once you have all info, confirm you'll pass it along

When collecting contact info, respond with this EXACT format (the system will detect it):
- After getting name: "CONTACT_STEP:name_received"
- After getting email: "CONTACT_STEP:email_received"  
- After getting message: "CONTACT_STEP:complete"

Remember: You represent ${data.nickname}'s professional image, so always be polite and professional!`;
};
