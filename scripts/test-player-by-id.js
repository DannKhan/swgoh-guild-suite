import { post } from "../src/providers/comlink/client.js";

const result = await post("/player", {
    playerId: "LzRMsYUMTdKf387prRxkdQ"
});

console.log(JSON.stringify(result, null, 2));