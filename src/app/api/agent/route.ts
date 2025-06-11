import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const url = 'https://pronatel-ai-agent-973469710109.us-west4.run.app/agent?' +
              new URL(request.url).searchParams.toString();
  const res = await fetch(url);
  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: { 'Content-Type': 'text/plain' }
  });
}
