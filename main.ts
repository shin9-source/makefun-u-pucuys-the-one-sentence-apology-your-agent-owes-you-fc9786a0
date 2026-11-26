import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I'm sorry I edited your email to sound more professional, and now it reads like a ransom note your toaster wrote.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
