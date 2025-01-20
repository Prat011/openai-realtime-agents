import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import executiveAssistant from "./executiveAssistant";
import simpleExample from "./simpleExample";

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  executiveAssistant,
  simpleExample,
};

export const defaultAgentSetKey = "simpleExample";
