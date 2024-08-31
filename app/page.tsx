import { Form } from "./Form";
import { GroupList } from "./GroupList";
import OpenAI from "openai";
import prompt from "./prompt";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let groups;
  if (searchParams?.text) {
    groups = await getLLM(searchParams.text);
  }
  return (
    <div className="bg-zinc-400 w-11/12 md:w-1/2 lg:w-1/3 h-2/3 md:h-3/4 lg:h-3/4 transition-all rounded-xl font-mono shadow-[#6361858f_6px_5px_1px_0px] overflow-y-auto ">
      {searchParams?.text ? <GroupList groups={groups} /> : <Form />}
    </div>
  );
}

async function getLLM(text: string | string[]) {
  let groups;
  const client = new OpenAI({
    apiKey: process.env.TOGETHER_API_KEY,
    baseURL: process.env.BASE_URL,
  });
  while (!groups) {
    try {
      const response = await client.chat.completions.create({
        model: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
        messages: [
          {
            role: "system",
            content: prompt,
          },
          {
            role: "user",
            content: `Text: ${text}`,
          },
        ],
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.7,
      });
      if (response.choices[0].message.content)
        groups = JSON.parse(response.choices[0].message.content);
    } catch (e) {
      console.log(e);
    }
  }
  return groups;
}
