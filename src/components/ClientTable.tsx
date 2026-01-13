"use client";

/**
 * ClientTable
 * Clean table for listing clients with name, company, status.
 */
export default function ClientTable({
  clients,
}: {
  clients: { name: string; company: string; status?: string }[];
}) {
  return (
    <div className="mb-6 card p-4">
      <h3 className="text-lg font-semibold mb-2">Client List</h3>
      <table className="w-full border-collapse border border-gray-200 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Company</th>
            <th className="border p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.company}</td>
              <td className="border p-2">{c.status ?? "—"}</td>
            </tr>
          ))}
          {clients.length === 0 && (
            <tr>
              <td className="border p-2 text-gray-500" colSpan={3}>
                No clients yet. Try: “Add client Alice from Innoscribe”
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}