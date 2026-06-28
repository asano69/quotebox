// frontend/src/pages/Sleep.jsx
import { createSignal } from "solid-js";
import PocketBase from "pocketbase";

const pb = new PocketBase(window.location.origin);

export default function Sleep() {
  const [date, setDate] = createSignal("");
  const [quality, setQuality] = createSignal("3");
  const [tags, setTags] = createSignal("");

  const addLog = async (e) => {
    e.preventDefault();
    await pb.collection("sleep_logs").create({
      date: new Date(date()).toISOString(),
      quality: Number(quality()),
      tags: tags()
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
    setDate("");
    setTags("");
  };

  return (
    <div>
      <h1>Sleep Log</h1>
      <form onSubmit={addLog}>
        <input
          type="datetime-local"
          value={date()}
          onInput={(e) => setDate(e.target.value)}
          required
        />
        <select value={quality()} onInput={(e) => setQuality(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          value={tags()}
          onInput={(e) => setTags(e.target.value)}
          placeholder="tags (comma separated)"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
