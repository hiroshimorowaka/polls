import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import { z } from "zod";

const app = Fastify();

const prisma = new PrismaClient();

app.post("/polls", async (req, res) => {
	const createPollBody = z.object({
		title: z.string(),
	});

	const reqBody = createPollBody.parse(req.body);

	const poll = await prisma.poll.create({
		data: {
			title: reqBody.title,
		},
	});

	return res.status(201).send({ id: poll.id });
});

app.listen({ port: 3333 }, () => {
	console.log("Server listen on port 3333");
});
