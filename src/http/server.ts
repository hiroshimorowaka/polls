import Fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

import cookie from "@fastify/cookie";
import { voteOnPoll } from "./routes/vote-on-poll";
const app = Fastify();

app.register(cookie, {
	secret: "hiroshisecretdemais",
	hook: "onRequest",
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }, () => {
	console.log("Server listen on port 3333");
});
