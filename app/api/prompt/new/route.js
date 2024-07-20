import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompts";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();
    try {
        await connectToDatabase();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create a new prompt.." });
    }
}