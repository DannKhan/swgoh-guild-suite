import { buildGuildSnapshot } from "../src/snapshot-builder/builder.js";

const snapshot = await buildGuildSnapshot("743985967");

console.log("Guild:", snapshot.guild.profile.name);
console.log("Members:", snapshot.guild.member.length);