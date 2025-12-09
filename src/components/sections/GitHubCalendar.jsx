import { useEffect, useState, useMemo } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { RevealOnScroll } from "../RevealOnScroll";

export const GitHubCalendar = () => {
    const [contributionData, setContributionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalContributions, setTotalContributions] = useState(0);
    const [calendarSize, setCalendarSize] = useState({ blockSize: 12, blockMargin: 4, fontSize: 14 });
    const [isMobile, setIsMobile] = useState(false);

    const username = "Ansh0305";

    // Responsive
    useEffect(() => {
        const updateCalendarSize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 640);

            if (width <= 375) {
                // iPhone SE and very small devices
                setCalendarSize({ blockSize: 9, blockMargin: 2, fontSize: 10 });
            } else if (width <= 480) {
                // Small phones
                setCalendarSize({ blockSize: 9, blockMargin: 3, fontSize: 11 });
            } else if (width <= 640) {
                // Larger phones
                setCalendarSize({ blockSize: 10, blockMargin: 3, fontSize: 12 });
            } else if (width <= 768) {
                // Tablets
                setCalendarSize({ blockSize: 11, blockMargin: 4, fontSize: 13 });
            } else {
                // Desktop
                setCalendarSize({ blockSize: 12, blockMargin: 4, fontSize: 14 });
            }
        };

        updateCalendarSize();
        window.addEventListener("resize", updateCalendarSize);
        return () => window.removeEventListener("resize", updateCalendarSize);
    }, []);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch contributions");
                }

                const data = await response.json();
                setContributionData(data.contributions);
                setTotalContributions(data.total.lastYear);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchContributions();
    }, []);

    // Show Only last 4 months on mobile
    const filteredData = useMemo(() => {
        if (!contributionData.length) return [];

        if (isMobile) {

            const monthsAgo = new Date();
            monthsAgo.setMonth(monthsAgo.getMonth() - 4);

            return contributionData.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate >= monthsAgo;
            });
        }

        return contributionData;
    }, [contributionData, isMobile]);

    const customTheme = {
        dark: ["#161b22", "#0c4a6e", "#0369a1", "#0ea5e9", "#22d3ee"],
    };

    return (
        <section
            id="github"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        GitHub Contributions
                    </h2>

                    <div className="rounded-xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        {/* Stats Head */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <a
                                        href={`https://github.com/${username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                                    >
                                        @{username}
                                    </a>
                                    <p className="text-gray-400 text-sm">
                                        GitHub Profile
                                    </p>
                                </div>
                            </div>

                            {!loading && !error && (
                                <div className="text-center sm:text-right">
                                    <p className="text-2xl font-bold text-white">
                                        {totalContributions.toLocaleString()}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        contributions in the last year
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Calendar */}
                        <div className="calendar-container overflow-x-auto">
                            {loading && (
                                <div className="flex items-center justify-center h-32">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-center justify-center h-32">
                                    <p className="text-red-400">
                                        Failed to load contributions. Please try again later.
                                    </p>
                                </div>
                            )}

                            {!loading && !error && filteredData.length > 0 && (
                                <div className="overflow-x-auto pb-2">
                                    <ActivityCalendar
                                        data={filteredData}
                                        theme={customTheme}
                                        colorScheme="dark"
                                        blockSize={calendarSize.blockSize}
                                        blockMargin={calendarSize.blockMargin}
                                        fontSize={calendarSize.fontSize}
                                        hideColorLegend={true}
                                        hideMonthLabels={false}
                                        hideTotalCount={true}
                                        showWeekdayLabels={!isMobile}
                                        labels={{
                                            totalCount: "{{count}} contributions in the last year",
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-end gap-2 mt-4 text-sm text-gray-400">
                            <span>Less</span>
                            <div className="flex gap-1">
                                {customTheme.dark.map((color, index) => (
                                    <div
                                        key={index}
                                        className="w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
