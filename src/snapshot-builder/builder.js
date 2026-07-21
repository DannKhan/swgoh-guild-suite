import { getPlayerByAllyCode } from "../providers/comlink/player.js";
import { getGuild } from "../providers/comlink/guild.js";

export async function buildGuildSnapshot(allyCode) {
    const player = await getPlayerByAllyCode(allyCode);

    const guild = await getGuild(player.guildId);

    return guild;
}