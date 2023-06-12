// import { file_reader } from './file.ts';
import { server_init } from "./server.ts";
console.log("Hello World!");

const run = async () => {
  // await file_reader();
  await server_init();
};

run();
