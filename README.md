# Deno - Touchpoint

A project for practicing and get in touch with denoJS.

## Preconditions
- Install deno in your local env, this project was created with `deno 1.34.2`.

## How to Run
- If you want to test only file reading, unncomment the lines related to `file_reader` in `init.ts`.
- Comment the lines related to `server_init`.
- Run the command `deno task dev`
- Text content should be seen in terminal.

- If you want to check and enjoy the server functions, comment all related to `file_reader` in `init.ts`.
- Preserve uncommented the lines related to `server_init`.
- Run the command `deno task dev`
- Check using the web browser or any rest-api client as insomnia or postman the following links:
  * `http://localhost:8000/test.txt` : the text content should be seen.
  * `http://localhost:8000/index.html` : main static page should be visualized.
  * `http://localhost:8000/page1.html` : another static page should be visualized.

Feel to modify this project and explore deno as you wish and enjoy the ride!

Referral Link:
- [Typescript on the Server](https://medium.com/@KevinBGreene/building-your-first-deno-application-a8ee82201a50)
- [Deno Manual](https://deno.com/manual@v1.34.2/getting_started)






