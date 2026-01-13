"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * ChatInterface
 * Professional ChatGPT-style UI with local history.
 * Delegates command execution to parent via onCommand.
 */
export default function ChatInterface({
  chatHistory,
  onCommand,
}: {
  chatHistory: string[];
  onCommand: (cmd: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onCommand(trimmed);
    setInput("");
  };

  return (
    <>
      {/* Chat History */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {chatHistory.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-2 rounded-md ${
              msg.startsWith("AI")
                ? "bg-blue-100 text-blue-900"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg}
          </motion.div>
        ))}
      </div>

      {/* Input Box */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Try: "Add client Alice from Innoscribe"'
        />
        <button
          type="submit"
          className="bg-[var(--innoscribe-blue)] text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </>
  );
}