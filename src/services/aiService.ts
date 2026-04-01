import { createAgent, initChatModel } from "langchain";

const model = await initChatModel("google-genai:gemini-2.5-flash-lite");
const agent = createAgent({
  model,
  tools: [],
});

export async function ask(message: string): Promise<string> {
  const response = await agent.invoke({
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  const last = response.messages.at(-1) as any;
  const content = last?.content;
  return typeof content === "string" ? content : JSON.stringify(response);
}
