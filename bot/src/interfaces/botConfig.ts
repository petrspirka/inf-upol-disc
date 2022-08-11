import { Command } from "../command";
import {
    OnGuildMemberAddAction,
    OnInteractionCreateAction,
    onReactionAddAction,
    onReactionRemoveAction,
    OnReadyAction
} from "../types";

export interface BotConfig {
    commands?: Command[];
    onReady?: OnReadyAction;
    onReactionAdd?: onReactionAddAction;
    onReactionRemove?: onReactionRemoveAction;
    onInteractionCreate?: OnInteractionCreateAction;
    onGuildMemberAdd?: OnGuildMemberAddAction;
}
