import { useState } from "react";
import type { Prompt } from "../../data/models/prompt.ts";
import config from "../../config.ts";

export default function ChatBar({sessionId, apiUrl, placeHolderMessage}: {sessionId: string, apiUrl: string, placeHolderMessage: string}) {
  const [prompt, setPrompt] = useState("")

  const sendPrompt = async () => {
    const newPrompt : Prompt = {
      sessionId: sessionId,
      prompt: prompt,
    }

    await fetch(`${config.apiUrl}/prompt/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrompt),
    });
  }

  return (
    <div>
      <input type="text" placeholder={placeHolderMessage} onChange={(e) => setPrompt(e.target.value)}/>
      <button onClick={sendPrompt}>
        <img src="" alt="Submit prompt" />
      </button>
    </div>
  );
}
