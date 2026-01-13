"use client";

/**
 * Dashboard
 * Right panel: Innoscribe Live Dashboard
 * Displays stats, client table, and upcoming meetings.
 */

import StatsCard from "./StatsCard";
import ClientTable from "./ClientTable";
import Meetings from "./Meetings";
import { PlusCircle, Calendar, Activity, Gauge } from "lucide-react";

export default function Dashboard({
  stats,
  clients,
  meetings,
}: {
  stats: { totalClients: number; activeCalls: number; revenue: number; systemStatus: string };
  clients: { name: string; company: string; status?: string }[];
  meetings: { client: string; datetime: string }[];
}) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[var(--innoscribe-blue)] mb-6">
        Innoscribe Live Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatsCard icon={<PlusCircle />} label="Total Clients" value={stats.totalClients} />
        <StatsCard icon={<Activity />} label="Active Calls" value={stats.activeCalls} />
        <StatsCard icon={<Calendar />} label="Revenue" value={`$${stats.revenue}`} />
        <StatsCard icon={<Gauge />} label="System" value={stats.systemStatus} />
      </div>

      {/* Client Table */}
      <ClientTable clients={clients} />

      {/* Upcoming Meetings */}
      <Meetings meetings={meetings} />
    </div>
  );
}