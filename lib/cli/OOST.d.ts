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
import { SplitOptions } from "./models/SplitOptions.js";
import { StitchOptions } from "./models/StitchOptions.js";
export * from "@open-ordinal/metadata";
export * from "./models/SplitOptions.js";
export * from "./models/StitchOptions.js";
/**
 * Splits a file into smaller parts based on the provided options.
 *
 * @param options - An object containing the input file path, output directory, and maximum size for each part.
 * @returns A promise that resolves when the splitting process is complete.
 * @group Main
 */
export declare function split(options: SplitOptions): Promise<string[]>;
/**
 * Stitches multiple files together into a single output file based on the provided options.
 *
 * @param options - An object containing the input pattern and output file path.
 * @returns A promise that resolves when the stitching process is complete.
 * @group Main
 */
export declare function stitch(options: StitchOptions): Promise<void>;
/**
 * @group Logging
 */
export declare function log(message: string, newLine?: boolean): void;
/**
 * @group Logging
 */
export declare function err(message: string, newLine?: boolean): void;
