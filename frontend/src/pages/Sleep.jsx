import { createSignal } from "solid-js";
import { pb } from "../utils/pb.js";

export default function Sleep() {
  const [date, setDate] = createSignal("");
  const [quality, setQuality] = createSignal("3");
  const [tags, setTags] = createSignal("");

  const addLog = async (e) => {
    e.preventDefault();
    
    // 入力値が空の場合は処理を中断
    if (!date()) return;

    try {
      // 1. PocketBaseが受け付ける日付フォーマットに変換
      // datetime-local の値 (YYYY-MM-DDTHH:mm) から Date オブジェクトを生成
      const localDate = new Date(date());
      
      await pb.collection("sleep_logs").create({
        // ISO文字列 (YYYY-MM-DDTHH:mm:ss.sssZ) に変換して送信
        date: localDate.toISOString(), 
        quality: Number(quality()),
        tags: tags()
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });

      // 2. 状態のリセット
      setDate("");
      setQuality("3"); // 初期値に戻す
      setTags("");
      
      alert("ログを保存しました！");
    } catch (error) {
      console.error("保存に失敗しました:", error);
      alert("エラーが発生しました: " + error.message);
    }
  };

  return (
    <div>
      <h1>Sleep Log</h1>
      <form onSubmit={addLog}>
        <input
          type="datetime-local"
          value={date()}
          // SolidJSでは target.value を安全に取得
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


