"use client";

import { useEffect, useRef, useState } from "react";

const GREETING =
  "Hi there 👋 I'm the GAV & Associates virtual assistant. Ask me about our services, portfolio, or how to get a quote.";

const QUICK_REPLIES = [
  "What services do you offer?",
  "Show me your portfolio",
  "How do I get a quote?",
  "Where are you located?",
];

const KB = [
  {
    k: ["service", "offer", "do you do", "capabilit"],
    a: "We provide architecture, design, and planning services across Commercial, Residential, Industrial, Assembly, Education, Multi-Family, and Custom Residential projects — plus historic revitalization work throughout southeast Michigan.",
  },
  {
    k: ["portfolio", "project", "work", "gallery"],
    a: "You can browse our work under the Portfolio menu — it's organized by Assembly, Commercial, Education, Industrial, Multi-Family, and Custom Residential. Want me to point you to a specific category?",
  },
  {
    k: ["quote", "estimate", "cost", "price", "budget"],
    a: "Happy to help start that. The quickest way is to email info@gavassociates.com or call 248-985-9101 with a short project brief — scope, location, and rough timeline — and our team will follow up.",
  },
  {
    k: ["location", "address", "where", "office"],
    a: "Our office is at 24001 Orchard Lake Road, Suite 180A, Farmington, MI 48336.",
  },
  {
    k: ["contact", "phone", "email", "call", "reach"],
    a: "You can reach us at 248-985-9101 or info@gavassociates.com — or use the Contact section at the bottom of the page.",
  },
  {
    k: ["hour", "open", "time"],
    a: "Our office is open Monday–Friday, 9:00 AM – 5:00 PM EST. Feel free to leave your details anytime and we'll follow up the next business day.",
  },
  {
    k: ["history", "since", "founded", "1998", "about"],
    a: "GAV & Associates has been designing exciting, functional, and efficient buildings since 1998 — with a mission built on function and beauty in every project.",
  },
  { k: ["hi", "hello", "hey"], a: "Hello! Welcome to GAV & Associates. What can I help you with today — services, portfolio, or a project quote?" },
  { k: ["thank"], a: "You're very welcome! Anything else I can help you find?" },
];

function getReply(msg) {
  const lower = msg.toLowerCase();
  for (const entry of KB) {
    if (entry.k.some((kw) => lower.includes(kw))) return entry.a;
  }
  return "Thanks for your message! For anything specific to your project, our team can help directly — call 248-985-9101 or email info@gavassociates.com. Is there anything else I can point you to on the site?";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showQuick, setShowQuick] = useState(true);
  const [typing, setTyping] = useState(false);
  const [value, setValue] = useState("");
  const bodyRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, typing]);

  function openPanel() {
    setOpen(true);
    if (!initialized.current) {
      initialized.current = true;
      setTimeout(() => {
        setMessages([{ who: "bot", text: GREETING }]);
      }, 300);
    }
  }

  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { who: "user", text: trimmed }]);
    setValue("");
    setShowQuick(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { who: "bot", text: getReply(trimmed) }]);
    }, 700 + Math.random() * 500);
  }

  return (
    <>
      <button
        className="gav-chat-launcher"
        aria-label="Open chat assistant"
        onClick={() => (open ? setOpen(false) : openPanel())}
      >
        <span className="gav-dot"></span>
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </button>

      <div className={`gav-chat-panel${open ? " open" : ""}`}>
        <div className="gav-chat-header">
          <div className="gav-avatar">G</div>
          <div>
            <div className="gav-title">GAV Assistant</div>
            <div className="gav-sub">Online now</div>
          </div>
          <button
            className="gav-chat-close"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>

        <div className="gav-chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div className={`gav-msg ${m.who}`} key={i}>
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="gav-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        {showQuick && (
          <div className="gav-quick-replies">
            {QUICK_REPLIES.map((q) => (
              <button key={q} onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>
        )}

        <div className="gav-chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(value)}
          />
          <button aria-label="Send message" onClick={() => send(value)}>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div className="gav-chat-footer">Powered by GAV &amp; Associates AI</div>
      </div>
    </>
  );
}
