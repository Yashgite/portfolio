"use client";
import { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hola, I am Deku powered Master Yash. How can i help you." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null); // Ref for chat container

  // Scroll to the bottom when messages update
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error fetching response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto">
 <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Chat with Deku</h2>
      
      {/* Chat Container with Auto-scroll */}
      <div ref={chatRef} className="h-64 overflow-y-auto border p-3 rounded-md bg-gray-800">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-3 py-1 rounded-lg ${msg.sender === "user" ? "bg-blue-500" : "bg-gray-600"}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-400">Typing...</p>}
      </div>

      {/* Input Field & Send Button */}
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-l bg-gray-700 border-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask Something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage} className="px-4 bg-blue-500 rounded-r hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
    </main>
   
  );
};

export default Chatbot;
