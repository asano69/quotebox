import { createSignal, onMount } from "solid-js";
import { pb } from "../shared/api/pb.js";
import QuoteForm from "./QuoteForm.jsx";
import QuoteTable from "./QuoteTable.jsx";
import "./QuotePage.css";

export default function Quote() {
  const [recentLogs, setRecentLogs] = createSignal([]);

  // No "date" field in this schema anymore, so sort by Pocketbase's
  // auto-generated "created" timestamp to get chronological order.
  const loadRecent = async () => {
    try {
      const res = await pb
        .collection("quote_cards")
        .getList(1, 7, { sort: "-created" });
      setRecentLogs(res.items);
    } catch (error) {
      console.error("Failed to load recent logs:", error);
    }
  };
  onMount(loadRecent);

  const addLog = async (data) => {
    try {
      await pb.collection("quote_cards").create(data);
      await loadRecent();
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Quote Log</h1>
      <QuoteForm onAdd={addLog} />
      <QuoteTable logs={recentLogs()} />
    </div>
  );
}
