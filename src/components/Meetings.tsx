"use client";

import { motion } from "framer-motion";

/**
 * Meetings
 * Upcoming meetings list with subtle motion for new entries.
 */
export default function Meetings({
  meetings,
}: {
  meetings: { client: string; datetime: string }[];
}) {
  return (
    <div className="card p-4">
      <h3 className="text-lg font-semibold mb-2">Upcoming Meetings</h3>
      <ul className="space-y-2">
        {meetings.map((m, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-2 bg-blue-50 rounded-md shadow-sm"
          >
            {m.client} — {m.datetime}
          </motion.li>
        ))}
        {meetings.length === 0 && (
          <li className="text-gray-500">
            No meetings scheduled. Try: “Schedule a meeting with Alice tomorrow at 10 AM”
          </li>
        )}
      </ul>
    </div>
  );
}