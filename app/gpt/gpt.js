import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '1234'  ,dangerouslyAllowBrowser: true });

export async function GPT(prompt) {
  console.log(prompt);
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens:2000,
  });

  return (completion.choices[0]);
}

