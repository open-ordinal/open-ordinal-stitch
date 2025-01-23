#!/usr/bin/env node
/*!
 * Open Ordinal Stitch
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
import * as ooST from "./OOST.js";
import { program } from "commander";
//#endregion
//#region Configure Program
program.on('SIGINT', () => {
    process.exit();
});
program.name("oostitch");
program.command("split")
    .description('Split a binary')
    .option('-i, -input <input>', 'File to split')
    .option('-o, -output <output>', 'Output file path to save parts')
    .option('-m, -maxsize <maxsize>', 'Max size of parts in bytes', "350000")
    .action((options) => {
    split(options);
});
program.command("stitch")
    .description('Stitch multiple binaries to one')
    .option('-i, -input <input>', 'Parts to stitch with wildcard')
    .option('-o, -output <output>', 'Output file')
    .action((options) => {
    stitch(options);
});
//#endregion
//#region Actions
async function split(options) {
    return ooST.split(new ooST.SplitOptions(options));
}
async function stitch(options) {
    return ooST.stitch(new ooST.SplitOptions(options));
}
//#endregion
//#region Initial Calls
await program.parseAsync();
//#endregion
