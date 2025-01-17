#!/usr/bin/env node
/*!
 * Open Ordinal Stitch
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOST (Library)
 */
//#region Imports
import chalk from "chalk";
import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from 'url';
import { Buffer } from 'buffer';
import { glob } from 'glob';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import pack from "../../package.json" with { type: "json" };
import { SplitOptions } from "./models/SplitOptions.js";
import { StitchOptions } from "./models/StitchOptions.js";
export * from "@open-ordinal/metadata";
export * from "./models/SplitOptions.js";
export * from "./models/StitchOptions.js";
//#endregion
//#region Privates
let _splitOptions = new SplitOptions();
let _stitchOptions = new StitchOptions();
let _openOrdinalInscriptionsFilePath = "";
let _openOrdinalInscriptions = [];
const _maxFunctions = 150;
let _numberFormatter = new Intl.NumberFormat();
//#endregion
//#region Configure Program
// Get global known list
_openOrdinalInscriptionsFilePath = path.resolve(path.join(__dirname, "../src/assets/OpenOrdinalInscriptions.json"));
//#endregion
//#region Main Actions
async function init() {
}
function dumpHeader() {
    log("===");
    log(chalk.bold("Open Ordinal Stitch " + pack.version));
    log("===");
    // log(chalk.bold("Temp Path: \"" + _config.tempPath + "\""));
    // log("---");
}
/**
 * Splits a file into smaller parts based on the provided options.
 *
 * @param options - An object containing the input file path, output directory, and maximum size for each part.
 * @returns A promise that resolves when the splitting process is complete.
 * @group Main
 */
export async function split(options) {
    // Set the global options variable
    _splitOptions = options;
    // Initialize the splitting process
    await init();
    // Dump the header information
    dumpHeader();
    // Check if input file path, output directory, and max size are provided
    let parts = [];
    if (options.input && options.output && options.maxSize) {
        // Split the file into parts based on the provided options
        parts = await splitFile(options.input, options.output, options.maxSize);
    }
    return parts;
}
/**
 * Stitches multiple files together into a single output file based on the provided options.
 *
 * @param options - An object containing the input pattern and output file path.
 * @returns A promise that resolves when the stitching process is complete.
 * @group Main
 */
export async function stitch(options) {
    // Set the global options variable
    _stitchOptions = options;
    // Initialize the stitching process
    await init();
    // Dump the header information
    dumpHeader();
    // Check if both input pattern and output file path are provided
    if (options.input && options.output) {
        // Use glob to get the list of files matching the input pattern
        const files = await glob(options.input, {
            absolute: true,
            windowsPathsNoEscape: true,
            debug: false
        });
        // Sort the files alphabetically
        const sortedFiles = files.sort((a, b) => a.localeCompare(b));
        // If there are files to stitch, proceed with the stitching process
        if (sortedFiles.length > 0) {
            await stitchFiles(sortedFiles, options.output);
        }
    }
}
//#endregion
//#region Helpers
/**
 * Splits a file into smaller parts if it exceeds the specified max size.
 *
 * @param file - The path to the input file.
 * @param outPath - The directory where the output parts will be saved.
 * @param maxSize - The maximum size (in bytes) for each part.
 * @returns A promise that resolves to an array of arrays, each containing the part file path, start position, and size.
 */
async function splitFile(file, outPath, maxSize) {
    // Get the file stats to determine its size
    const stats = await fs.stat(file);
    const size = stats.size;
    // Parse the file name and directory path
    const fileName = path.parse(file).name;
    const filePath = path.dirname(file);
    // Open the file for reading
    const fileStream = await fs.open(file, "r");
    // Create the output directory if it doesn't exist
    await fs.mkdir(outPath, { recursive: true });
    // Initialize the parts array to store the details of each part
    const parts = [];
    // If the file size exceeds the max size, split it into parts
    if (maxSize && size > maxSize) {
        const count = Math.ceil(size / maxSize);
        for (let i = 0; i < count; i++) {
            const part = path.join(outPath, `${fileName}-P${i.toString().padStart(2, '0')}.bin`);
            const buffer = Buffer.alloc(maxSize);
            const { bytesRead } = await fileStream.read(buffer, 0, maxSize, i * maxSize);
            if (bytesRead > 0) {
                await fs.writeFile(part, buffer.slice(0, bytesRead));
                parts.push(part);
            }
        }
        await fileStream.close();
    }
    else {
        // If the file size is within the max size, no splitting is needed
        parts.push(file);
    }
    return parts;
}
/**
 * Stitches multiple files together into a single output file.
 *
 * @param files - An array of file paths to be stitched together.
 * @param outputFilePath - The path to the output file where the stitched content will be saved.
 * @returns A promise that resolves to a boolean indicating success.
 */
async function stitchFiles(files, outputFilePath) {
    // Initialize the total size of the output file
    let size = 0;
    // Calculate the total size by summing up the sizes of all input files
    for (let file of files) {
        const stats = await fs.stat(file);
        size += stats.size;
    }
    // Allocate a buffer to hold the combined content of all input files
    const buffer = Buffer.alloc(size);
    let offset = 0;
    // Read each file and copy its content into the buffer
    for (let part of files) {
        const reader = await fs.open(part, "r");
        const stats = await reader.stat();
        const { bytesRead } = await reader.read(buffer, offset, stats.size);
        offset += stats.size;
        await reader.close();
    }
    // Write the combined content from the buffer to the output file
    await fs.writeFile(outputFilePath, buffer);
    return true;
}
/**
 * Fetches JSON data from a given URL.
 *
 * @param url - The URL to fetch the JSON data from.
 * @returns A promise that resolves to the JSON data if the request is successful, or `undefined` if the request fails.
 */
async function getJSONFromURL(url) {
    // Fetch the response from the given URL
    const response = await fetch(url);
    // Check if the response is successful
    if (response.ok) {
        // Parse and return the JSON data
        return await response.json();
    }
    // Return undefined if the response is not successful
    return undefined;
}
/**
 * Fetches text data from a given URL.
 *
 * @param url - The URL to fetch the text data from.
 * @returns A promise that resolves to the text data if the request is successful, or `undefined` if the request fails.
 */
async function getTextFromURL(url) {
    // Fetch the response from the given URL
    const response = await fetch(url);
    // Check if the response is successful
    if (response.ok) {
        // Parse and return the text data
        return await response.text();
    }
    // Return undefined if the response is not successful
    return undefined;
}
/**
 * Recursively searches for a file in the parent directories.
 *
 * @param fileName - The name of the file to search for.
 * @param currentDir - The current directory to start the search from. Defaults to the directory of the current module.
 * @returns A promise that resolves to the file path if found, or null if the file is not found.
 */
async function findFileInParentDir(fileName, currentDir = import.meta.url) {
    // Resolve the parent directory
    const parentDir = path.resolve(currentDir, '..');
    const filePath = path.join(parentDir, fileName);
    // Check if the file exists in the current directory
    if (await exists(filePath)) {
        return filePath;
    }
    else if (parentDir === currentDir) {
        // If the parent directory is the same as the current directory, we've reached the root
        return null;
    }
    else {
        // Recursively search in the parent directory
        return findFileInParentDir(fileName, parentDir);
    }
}
/**
 * Checks if a given host is a local address.
 *
 * @param host - The host address to check.
 * @returns A boolean indicating whether the host is local.
 */
function isLocal(host) {
    // Check for common local addresses
    if (host === "127.0.0.1" || host === "localhost" || host === "[::1]") {
        return true;
    }
    // Check for local IPv4 addresses in the 127.0.0.0/8 range
    if (host.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)) {
        return true;
    }
    // Return false if the host is not local
    return false;
}
/**
 * Reads the content of a text file.
 *
 * @param filePath - The path to the text file.
 * @returns A promise that resolves to the content of the file as a string.
 */
async function readText(filePath) {
    // Read the file content as a UTF-8 encoded string
    return await fs.readFile(filePath, 'utf8');
}
/**
 * Writes text data to a specified file, creating the directory if it doesn't exist.
 *
 * @param filePath - The path to the file where the data will be written.
 * @param data - The text data to write to the file.
 * @returns A promise that resolves to the file path once the data has been written.
 */
async function writeText(filePath, data) {
    // Check if the directory exists, and create it if it doesn't
    if (!await exists(path.dirname(filePath))) {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
    }
    // Write the text data to the file with UTF-8 encoding
    await fs.writeFile(filePath, data, "utf8");
    return filePath;
}
/**
 * Checks if a file exists at the given path.
 *
 * @param file - The path to the file.
 * @returns A promise that resolves to `true` if the file exists, or `false` if it does not.
 */
async function exists(file) {
    try {
        // Attempt to get the file stats
        await fs.stat(file);
        return true;
    }
    catch {
        // If an error occurs (e.g., file does not exist), return false
        return false;
    }
}
/**
 * @group Logging
 */
export function log(message, newLine = true) {
    if (message.includes("===")) {
        const line = '='.repeat(process.stdout.columns);
        message = chalk.green.bold(line);
    }
    if (message.includes("---")) {
        const line = '-'.repeat(process.stdout.columns);
        message = chalk.green.bold(line);
    }
    if (newLine) {
        console.log(message);
    }
    else {
        process.stdout.write(message);
    }
}
/**
 * @group Logging
 */
export function err(message, newLine = true) {
    if (message.includes("===")) {
        const line = '='.repeat(process.stdout.columns);
        message = chalk.green.bold(line);
    }
    if (message.includes("---")) {
        const line = '-'.repeat(process.stdout.columns);
        message = chalk.green.bold(line);
    }
    if (newLine) {
        console.error(message);
    }
    else {
        process.stderr.write(message);
    }
}
/**
 * Extracts the inscription ID from the URL.
 *
 * @returns {string} - The inscription ID extracted from the URL, or an empty string if the URL is invalid.
 */
function getInscriptionIdFromUrl(url) {
    // Split the URL path into parts using "/" as the delimiter
    const parts = url.split("/");
    const lookFor = ['content', 'preview', 'inscription'];
    // Check if the URL contains any known parts and get ID
    if (parts.some(item => lookFor.includes(item))) {
        return parts[parts.length - 1]; // Return the last part as the inscription ID
    }
    else {
        // Log an error message if the URL does not contain a valid inscription ID
        return ""; // Return an empty string if the URL is invalid
    }
}
//#endregion
//#region Interfaces
//#endregion
