import React, { useState } from "react";

export default function ChatBase() {
  const [chatText, setChatText] = useState("");
  console.log(chatText);
  return (
    <section className="text-white flex justify center">
      <div className="container flex flex-col border border-gray-500 mx-[300px] my-28">
        <div className="h-[400px]"></div>
        <div className="flex">
          <input
            className="w-full bg-[#121416] px-2 py-3 outline-none"
            type="text"
            id="chatText"
            name="chatText"
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
            placeholder="Type a message"
          />
          <button className="bg-gray-500 text-white px-5 py-[2px]">send</button>
        </div>
      </div>
    </section>
  );
}
