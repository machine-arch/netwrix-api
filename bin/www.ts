import app from "../app";
import http from "http";

const port = process.env.PORT || 3002;
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => console.log(`Listening on port ${port}`));
server.on("error", (error) => console.log(`Error: ${error}`));
