import { path } from "./deps/deps.ts";

const file_reader = async () => {
  const file_path = path.resolve(Deno.cwd(), `src/public/test.txt`);
  const text = await Deno.readFile(file_path);
  const decoder = new TextDecoder("utf-8");
  console.log(decoder.decode(text));
};

const readStaticFile = async (file_name: string): Promise<string> => {
  const normalizedFileName = file_name.replace(/^\/+/, "");
  const filePath = path.resolve(Deno.cwd(), `src/public/`, normalizedFileName);
  console.log("filePath: ", filePath);
  const text = await Deno.readFile(filePath);
  const decoder = new TextDecoder("utf-8");
  const textContent = decoder.decode(text);
  return textContent;
};

export { file_reader, readStaticFile };
