import { createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { pb } from "./api/pb.js";
import QuoteTable from "./quote/QuoteTable.jsx";
import "./quote/QuotePage.css";

export default function App() {

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

  return (
    <div>
      <h1>Quotebox</h1>
      <A href="/about">About</A>
      <A href="/new">Add Quote</A>
      <QuoteTable logs={recentLogs()} />
    </div>
  );
}





