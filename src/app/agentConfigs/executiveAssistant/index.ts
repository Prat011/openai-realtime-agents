import { injectTransferTools } from "../utils";
import email_agent from "./email";

email_agent.downstreamAgents = [email_agent];

const agents = injectTransferTools([email_agent]);

export default agents;

