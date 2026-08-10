"use client";

import { FormEvent, useState } from "react";
import { apiBaseUrl, submitDemoPayload } from "@/lib/api";

export function ApiDemoForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("尚未送出資料。");
  const [responseText, setResponseText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("送出中...");

    try {
      const result = await submitDemoPayload({ name, message });
      setStatus("資料已成功送到 FastAPI。");
      setResponseText(JSON.stringify(result, null, 2));
      setName("");
      setMessage("");
    } catch (error) {
      const nextMessage =
        error instanceof Error ? error.message : "發生未知錯誤";
      setStatus(`送出失敗：${nextMessage}`);
      setResponseText("");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="panel">
      <h2>前後端串接範例</h2>
      <p>此表單會呼叫 `POST /api/v1/data`，可直接當成後續功能開發的起點。</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          名稱
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="輸入名稱"
            required
          />
        </label>
        <label>
          訊息
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="輸入想送到後端的內容"
            required
          />
        </label>
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "送出中..." : "送出到 API"}
        </button>
      </form>
      <p
        className={
          status === "尚未送出資料。"
            ? "status-idle"
            : status.startsWith("資料已成功")
              ? "status-ok"
              : "status-error"
        }
      >
        {status}
      </p>
      <p>目前 API Base URL: `{apiBaseUrl}`</p>
      {responseText ? <pre className="response-box">{responseText}</pre> : null}
    </div>
  );
}
