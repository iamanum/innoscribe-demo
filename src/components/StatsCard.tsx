"use client";

import { motion } from "framer-motion";

/**
 * StatsCard
 * Reusable enterprise card with icon, label, and value.
 */
export default function StatsCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-4 flex items-center space-x-3"
    >
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </motion.div>
  );
}