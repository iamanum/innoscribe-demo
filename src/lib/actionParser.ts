/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

/**
 * Agentic Action Parser
 * Converts natural language commands into structured actions.
 */

export type AgenticAction =
  | { type: "ADD_CLIENT"; payload: { name: string; company: string } }
  | { type: "SCHEDULE_MEETING"; payload: { name: string; timeLabel: string } }
  | { type: "ANALYZE_STATUS"; payload: any }
  | { type: "UNKNOWN"; payload: any };

/**
 * parseAgenticAction
 * Lightweight regex-based parser for demo reliability.
 */
export function parseAgenticAction(input: string): AgenticAction {
  const text = input.trim();

  // Add client: "Add client Alice from Innoscribe"
  const addMatch = text.match(/add client\s+(.+)\s+from\s+(.+)/i);
  if (addMatch) {
    const name = addMatch[1].trim();
    const company = addMatch[2].trim();
    return { type: "ADD_CLIENT", payload: { name, company } };
  }

  // Schedule meeting: "Schedule a meeting with Alice tomorrow at 10 AM"
  const schedMatch = text.match(/schedule(?:\s+a)?\s+meeting\s+with\s+(.+)\s+tomorrow\s+at\s+(.+)/i);
  if (schedMatch) {
    const name = schedMatch[1].trim();
    const time = schedMatch[2].trim();
    return { type: "SCHEDULE_MEETING", payload: { name, timeLabel: `Tomorrow at ${time}` } };
  }

  // Analyze system: "Analyze system status" / "System Health Check"
  if (/analyze|system health|system status/i.test(text)) {
    return { type: "ANALYZE_STATUS", payload: {} };
  }

  return { type: "UNKNOWN", payload: {} };
}