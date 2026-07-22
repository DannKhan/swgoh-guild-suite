import fs from "fs/promises";

import { buildGuildSnapshot } 
from "../src/snapshot-builder/builder.js";


const config =
    JSON.parse(
        await fs.readFile(
            "./config/tracked-guilds.json",
            "utf8"
        )
    );


for (const guild of config.guilds) {

    const snapshot =
        await buildGuildSnapshot(guild.allyCode);


    await fs.writeFile(
        `./docs/data/snapshots/${guild.name}.json`,
        JSON.stringify(snapshot, null, 2)
    );


    console.log(
        "Updated:",
        guild.name
    );

}