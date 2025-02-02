import { SlashCommandBuilder } from "@discordjs/builders"

import { CD_PhD as cd } from "../cd"
import { RoleName } from "../types"
import { RoleManagerCommand } from "./roleManager"

/**
 * Chat command used for managing the PhD. role
 */
export class PhdRoleManagerCommand extends RoleManagerCommand {
    name = cd.name
    description = cd.description
    builder = new SlashCommandBuilder()
        .addUserOption(option => {
            return option
                .setName(cd.options[0].name)
                .setDescription(cd.options[0].description)
                .setRequired(true)
        })

    roleNameManage: RoleName = "PhD."
    getUserFieldName: string = cd.options[0].name
    allowedRolesToAdd: RoleName[] = ["Katedra", "PhD.", "Root"]
    allowedRolesToRemove: RoleName[] = ["Katedra"]
}
