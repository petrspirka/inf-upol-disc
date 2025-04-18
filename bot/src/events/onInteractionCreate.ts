import { CacheType, Interaction } from "discord.js"

import { OnInteractionCreateArgs } from "../interfaces"
import { UnknownCommandError } from "../errors"
import { InteractionCommand } from "../command"

/**
 * Function that runs when a new interaction is created
 * 
 * This can be a new chat command, dropdown selection, modal confirmation, etc.
 * @param args Argument representing the event of new interaction being created
 */
export async function onInteractionCreate(args: OnInteractionCreateArgs) {
    const { client, interaction, mailer, bot, commands, buttons, modals, dropdown } = args
    let command: InteractionCommand<Interaction<CacheType>> | undefined

    if (interaction.isButton()) {
        const commandMaker = buttons.get(interaction.customId)

        if (commandMaker)
            command = new commandMaker()

    } else if (interaction.isModalSubmit()) {
        const commandMaker = modals.get(interaction.customId)

        if (commandMaker)
            command = new commandMaker()

    } else if (interaction.isStringSelectMenu()) {
        const splited = interaction.customId.split("-")
        const customId = splited[0]
        const flag = splited[1]

        const commandMaker = dropdown.get(customId)
        if (commandMaker)
            command = new commandMaker(flag)

    } else if (interaction.isChatInputCommand()) {
        const commandMaker = commands.get(interaction.commandName)

        if (commandMaker)
            command = new commandMaker()
    }

    if (!command) {
        throw new UnknownCommandError()
    }

    await command.execute(client, mailer, bot, interaction)
}
