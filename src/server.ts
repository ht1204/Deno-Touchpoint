import { readStaticFile } from "./file.ts";

const port = 8000;
const server = Deno.listen({ port });
console.log(`Server running on port: ${port}`);

const server_init = async () => {
  for await (const connection of server) {
    console.log("connection: ", connection);
    const httpConnection = Deno.serveHttp(connection);
    console.log("httpConnection: ", httpConnection);
    handleRequests(httpConnection);
  }
};

async function handleRequests(connection: Deno.HttpConn): Promise<void> {
  for await (const requestEvent of connection) {
    const url = new URL(requestEvent.request.url);
    console.log(url);
    const fileContent = await readStaticFile(url.pathname);
    requestEvent.respondWith(
      new Response(fileContent, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }),
    );
  }
}

export { server_init };
