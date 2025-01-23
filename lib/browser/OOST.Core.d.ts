/*!
 * Open Ordinal Stitch
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOST (Browser)
 */
import { StitchOptions } from "./models/StitchOptions.js";
export * from "@open-ordinal/metadata";
export * from "./models/StitchOptions.js";
/**
 * Stitches the provided options into a buffer.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<Buffer | undefined>} A promise that resolves to a Buffer if successful, or undefined if not.
 */
export declare function stitchAsArrayBuffer(options: StitchOptions): Promise<ArrayBuffer | undefined>;
/**
 * Stitches the provided options into a data URL.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 */
export declare function stitchAsDataUrl(options: StitchOptions): Promise<string | undefined>;
/**
 * Stitches the provided options into a string.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 */
export declare function stitchAsString(options: StitchOptions): Promise<string | undefined>;
declare global {
    interface Window {
        ooST?: any;
    }
}
