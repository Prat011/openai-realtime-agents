import { AgentConfig } from "@/app/types";
import { OpenAIToolSet } from "composio-core";
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.NEXT_PUBLIC_COMPOSIO_API_KEY) {
    throw new Error('COMPOSIO_API_KEY is not defined in environment variables');
}

const toolset = new OpenAIToolSet({apiKey: process.env.NEXT_PUBLIC_COMPOSIO_API_KEY})
async function getGmailTools() {
    const tools = await toolset.getTools({actions: ['GMAIL_FETCH_EMAILS']})
    const gmail_tools:any = [];
    for (let i = 0; i < tools.length; i++) {
        const tool = tools[i];
            gmail_tools.push({
                type: tool.type,
                name: tool.function.name,
                description: tool.function.description,
                parameters: tool.function.parameters
            });
        }
        return gmail_tools;

}

const gmail_tool = await getGmailTools()
const email_agent: AgentConfig = {
    name: "Email Assistant",
    publicDescription: "An agent that can fetch emails",
    instructions: "Fetch emails from the user's Gmail account",
    tools: gmail_tool,
}

export default email_agent;