import Fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { voteOnPoll } from "./routes/vote-on-poll";
import { pollResults } from "./ws/poll-results";
const app = Fastify();

app.register(cookie, {
	secret: "hiroshisecretdemais",
	hook: "onRequest",
});
app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({ port: 3333 }, () => {
	console.log("Server listen on port 3333");
});
