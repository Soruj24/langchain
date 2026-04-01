import { createAgent, initChatModel, tool } from "langchain";
import { getWeather } from "../tools/getWeather.js";

const model = await initChatModel("google-genai:gemini-2.5-flash-lite");

const systemPrompt =
  "You are a helpful assistant that can answer questions about the weather.";

const agent = createAgent({
  model,
  systemPrompt,
  tools: [getWeather],
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
