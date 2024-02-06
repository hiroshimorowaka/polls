import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function createPoll(app: FastifyInstance) {
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
}
