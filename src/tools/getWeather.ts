import { tool } from "langchain";
import z from "zod";

 export const getWeather = tool((input) => `It is ${input} degrees in ${input.city}.`, {
  name: "get_weather",
  description: "Get the weather in a location",
  schema: z.object({
    city: z.string().describe("The city to get the weather for"),
  }),
});