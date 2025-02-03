import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0]?.message?.content || "I couldn't generate a response." });

  } catch (error) {
    return NextResponse.json({ reply: "Error connecting to AI." }, { status: 500 });
  }
}
