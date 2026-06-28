import { createSignal } from "solid-js";
import { pb } from "../utils/pb.js";

// Returns current datetime formatted for <input type="datetime-local"> (YYYY-MM-DDTHH:mm).
// toISOString() gives UTC, so we subtract the timezone offset to get local time.
function nowLocal() {
  const d = new Date();
  return new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

export default function Sleep() {
  const [date, setDate] = createSignal(nowLocal());
  const [quality, setQuality] = createSignal("3");
  const [tags, setTags] = createSignal("");

  const addLog = async (e) => {
    e.preventDefault();

    try {
      await pb.collection("sleep_logs").create({
        date: new Date(date()).toISOString(),
        quality: Number(quality()),
        tags: tags()
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });

      setDate(nowLocal());
      setQuality("3");
      setTags("");
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Sleep Log</h1>
      <form onSubmit={addLog}>
        <input
          type="datetime-local"
          value={date()}
          onInput={(e) => setDate(e.currentTarget.value)}
          required
        />
        <select
          value={quality()}
          onChange={(e) => setQuality(e.currentTarget.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          type="text"
          value={tags()}
          onInput={(e) => setTags(e.currentTarget.value)}
          placeholder="tags (comma separated)"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
