import Fastify from "fastify";
import { createPoll } from "./routes/create-poll";

const app = Fastify();

app.register(createPoll);

app.listen({ port: 3333 }, () => {
	console.log("Server listen on port 3333");
});
