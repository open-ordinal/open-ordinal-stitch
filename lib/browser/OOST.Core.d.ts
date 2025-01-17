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
/**
 * Asynchronously fetches the page data for a specific SAT at a given page number.
 *
 * @category Core
 * @param {number} sat - The SAT number to fetch the page data for.
 * @param {number} [page=0] - The page number to fetch. Defaults to 0.
 * @param {string} [baseUrl=_baseUrl] - Optional base URL for the fetch. Defaults to _baseUrl.
 * @returns {Promise<{ids: Array<string>, more: boolean, page: number}>} - A promise that resolves to an object containing the IDs, a boolean indicating if there are more pages, and the current page number.
 * @throws Will throw an error if the fetch operation fails or if the response is not OK.
 */
export declare function getSatPage(sat: number, page?: number, baseUrl?: string): Promise<any>;
/**
 * Asynchronously fetches all the inscriptions on a given SAT.
 * The function fetches the inscriptions in pages and continues fetching until there are no more pages.
 *
 * @category Core
 * @param {number} sat - The SAT number to fetch the inscriptions from.
 * @param {string} [baseUrl=_baseUrl] - Optional base URL for the fetch. Defaults to _baseUrl.
 * @returns {Promise<string[]>} - A promise that resolves with an array of the IDs of the inscriptions.
 */
export declare function getSatAll(sat: number, baseUrl?: string): Promise<string[]>;
/**
 * Asynchronously fetches the children of a given inscription.
 * If no inscription ID is provided, it defaults to using the ID obtained from `getId()`.
 *
 * @category Core
 * @param {string} inscriptionId - The ID of the inscription to get the children of.
 *                                 Defaults to the ID of the page running it if none is given.
 * @param {number} page - The page number to fetch the children from.
 * @param {string} [baseUrl=_baseUrl] - Optional baseUrl for the fetch.
 * @returns {Promise<{ids: Array<string>, more: boolean, page: number}>} - A promise that resolves to an object containing:
 *                                                                         - ids: An array of children IDs.
 *                                                                         - more: A boolean indicating if there are more pages.
 *                                                                         - page: The current page number.
 */
export declare function getChildrenPage(inscriptionId?: string, page?: number, baseUrl?: string): Promise<any>;
/**
 * Asynchronously fetches all the children of a given inscription.
 *
 * @category Core
 * @param {string} inscriptionId - The ID of the inscription to get the children of.
 *                                 Defaults to the ID obtained from `getId()`.
 * @param {string} [baseUrl=_baseUrl] - Optional baseUrl for the fetch.
 * @returns {Promise<Array<string>>} - A promise that resolves with an array of the IDs of the children.
 */
export declare function getChildrenAll(inscriptionId?: string, baseUrl?: string): Promise<string[]>;
declare global {
    interface Window {
        ooST?: any;
    }
}
