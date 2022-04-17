import { Command } from "@oclif/core";

export default class Create extends Command {
  static description = "🎉 Create a new code snippet of your local file";

  async run() {
    console.log("🦄 Gistly");
  }
}
