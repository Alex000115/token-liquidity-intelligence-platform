import { connectRPC } from "./rpc.client.js";
import { simulateLiquidity } from "./liquidity.simulator.js";
import { NETWORK, TOKEN_ADDRESS } from "./network.config.js";

console.log("Token Liquidity Intelligence Platform");
console.log("Network:", NETWORK);
console.log("Token:", TOKEN_ADDRESS);

const provider = connectRPC();
simulateLiquidity(provider);
