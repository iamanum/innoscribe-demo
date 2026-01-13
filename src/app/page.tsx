"use client";

/**
 * Main Dashboard Page
 * Split-screen layout:
 * - Left: Agentic Command Center (Chat)
 * - Right: Innoscribe Live Dashboard (Stats, Clients, Meetings)
 * Agentic behavior: commands parsed via actionParser and applied to state.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Dashboard from "@/components/Dashboard";
import ChatInterface from "@/components/ChatInterface";
import { parseAgenticAction, AgenticAction } from "@/lib/actionParser";


// Types for local state
interface Client {
  name: string;
  company: string;
  phone?: string;
  status?: string;
}

interface Meeting {
  client: string;
  datetime: string;
}

export default function Page() {
  // Chat history for left panel
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  // Dashboard state (no backend — illusion via React state)
  const [clients, setClients] = useState<Client[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [stats, setStats] = useState({
    totalClients: 0,
    activeCalls: 2,
    revenue: 12000,
    systemStatus: "Operational",
  });

  /**
   * Execute parsed agentic action
   * Applies state changes and returns an AI response string.
   * Simulated latency adds "working" feel for credibility.
   */
  const executeAction = async (action: AgenticAction): Promise<string> => {
    await new Promise((res) => setTimeout(res, 500));

    switch (action.type) {
      case "ADD_CLIENT": {
        const { name, company } = action.payload;
        setClients((prev) => [...prev, { name, company, status: "Active" }]);
        setStats((prev) => ({ ...prev, totalClients: prev.totalClients + 1 }));
        return `Adding ${name} to database…`;
      }
      case "SCHEDULE_MEETING": {
        const { name, timeLabel } = action.payload;
        setMeetings((prev) => [...prev, { client: name, datetime: timeLabel }]);
        return "Meeting Confirmed.";
      }
      case "ANALYZE_STATUS": {
        setStats((prev) => ({ ...prev, systemStatus: "Optimized" }));
        return "All systems operational. Voice latency under 20ms.";
      }
      default:
        return "Command not recognized.";
    }
  };

  /**
   * Handle incoming command from ChatInterface
   * 1) Parse text → AgenticAction
   * 2) Execute action → update dashboard state
   * 3) Append user + AI messages to chat history
   */
  const handleCommand = async (raw: string) => {
    setChatHistory((prev) => [...prev, `User: ${raw}`, "AI: Processing…"]);
    const action = parseAgenticAction(raw);
    const aiReply = await executeAction(action);
    setChatHistory((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = `AI: ${aiReply}`;
      return updated;
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel — Agentic Command Center */}
      <motion.aside
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-1/3 border-r border-gray-200 p-6 panel flex flex-col"
      >
        <h2 className="text-xl font-bold text-[var(--innoscribe-blue)] mb-4">
          Agentic Command Center
        </h2>
        <ChatInterface chatHistory={chatHistory} onCommand={handleCommand} />
      </motion.aside>

      {/* Right Panel — Live Dashboard */}
      <motion.main
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-2/3 p-6"
      >
        <Dashboard stats={stats} clients={clients} meetings={meetings} />
      </motion.main>
    </div>
  );
}