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
import { decode } from 'cbor-x';
export * from "@open-ordinal/metadata";
export * from "./models/StitchOptions.js";
//#endregion
//#region Privates
let _stitchOptions = new StitchOptions();
let _baseUrl = "";
let _id = "";
//#endregion
//#region Main Actions
/**
 * Stitches the provided options into a buffer.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<Buffer | undefined>} A promise that resolves to a Buffer if successful, or undefined if not.
 */
export async function stitchAsArrayBuffer(options) {
    _stitchOptions = options;
    let parts = [];
    let contentType = "application/octet-stream";
    if (options?.parts) {
        // Parts defined inline
        for (const part of options.parts) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
            if (partContent)
                parts.push(partContent);
        }
        if (parts.length == 0)
            return undefined;
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.sat) {
        // Multiple Parts on a Sat 
        let ids = await getSatAll(options.sat);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.parent) {
        // Multiple Parts as Children for a Parent 
        let ids = await getChildrenAll(options.parent);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (!options) {
        //Look for parts in Metadata using the stitch protocol
        var metadata = await getInscriptionMetadata();
        if (metadata.stitch) {
            if (metadata.stitch.parts) {
                if (metadata.stitch.parts.length == 0)
                    return undefined;
                for (const part of metadata.stitch.parts) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.sat) {
                let ids = await getSatAll(metadata.stitch.sat);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.parent) {
                let ids = await getChildrenAll(metadata.stitch.parent);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            if (metadata.stitch.contentType) {
                contentType = metadata.stitch.contentType;
            }
        }
    }
    return joinArrayBuffers(parts);
}
/**
 * Stitches the provided options into a data URL.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 */
export async function stitchAsDataUrl(options) {
    _stitchOptions = options;
    let parts = [];
    let contentType = "application/octet-stream";
    if (options?.parts) {
        // Parts defined inline
        for (const part of options.parts) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
            if (partContent)
                parts.push(partContent);
        }
        if (parts.length != options.parts?.length)
            return undefined;
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.sat) {
        // Multiple Parts on a Sat 
        let ids = await getSatAll(options.sat);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.parent) {
        // Multiple Parts as Children for a Parent 
        let ids = await getChildrenAll(options.parent);
        for (const id of ids) {
            let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (!options) {
        //Look for parts in Metadata using the stitch protocol
        var metadata = await getInscriptionMetadata();
        if (metadata.stitch) {
            if (metadata.stitch.parts) {
                if (metadata.stitch.parts.length == 0)
                    return undefined;
                for (const part of metadata.stitch.parts) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(part));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.sat) {
                let ids = await getSatAll(metadata.stitch.sat);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.parent) {
                let ids = await getChildrenAll(metadata.stitch.parent);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAsBuffer(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            if (metadata.stitch.contentType) {
                contentType = metadata.stitch.contentType;
            }
        }
    }
    var buffer = joinArrayBuffers(parts);
    return await arrayBufferToDataURL(buffer, contentType);
}
/**
 * Stitches the provided options into a string.
 *
 * @group Main
 * @param {StitchOptions} options - The options to be stitched.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 */
export async function stitchAsString(options) {
    _stitchOptions = options;
    let parts = [];
    let contentType = "application/octet-stream";
    if (options?.parts) {
        // Parts defined inline
        for (const part of options.parts) {
            let partContent = await fetchUrlAaString(projectAsContentUrl(part));
            if (partContent)
                parts.push(partContent);
        }
        if (parts.length == 0)
            return undefined;
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.sat) {
        // Multiple Parts on a Sat 
        let ids = await getSatAll(options.sat);
        for (const id of ids) {
            let partContent = await fetchUrlAaString(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (options?.parent) {
        // Multiple Parts as Children for a Parent 
        let ids = await getChildrenAll(options.parent);
        for (const id of ids) {
            let partContent = await fetchUrlAaString(projectAsContentUrl(id));
            if (partContent)
                parts.push(partContent);
        }
        if (options.contentType) {
            contentType = options.contentType;
        }
    }
    else if (!options) {
        //Look for parts in Metadata using the stitch protocol
        var metadata = await getInscriptionMetadata();
        if (metadata.stitch) {
            if (metadata.stitch.parts) {
                if (metadata.stitch.parts.length == 0)
                    return undefined;
                for (const part of metadata.stitch.parts) {
                    let partContent = await fetchUrlAaString(projectAsContentUrl(part));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.sat) {
                let ids = await getSatAll(metadata.stitch.sat);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAaString(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            else if (metadata.stitch?.parent) {
                let ids = await getChildrenAll(metadata.stitch.parent);
                if (ids.length == 0)
                    return undefined;
                for (const id of ids) {
                    let partContent = await fetchUrlAaString(projectAsContentUrl(id));
                    if (partContent)
                        parts.push(partContent);
                }
            }
            if (metadata.stitch.contentType) {
                contentType = metadata.stitch.contentType;
            }
        }
    }
    return parts.join("");
}
//#endregion
//#region Helpers
/**
 * Set the internal stored Ordinal Id.
 * @category Core
 * @param {string} id Ordinal Id
 */
function setId(id) { _id = id; }
/**
 * Get the internal stored Ordinal Id.
 * @category Core
 * @returns {string} Ordinal Id
 */
function getId() {
    if (_id == null || _id == "") {
        _id = getInscriptionIdFromUrl();
    }
    return _id;
}
/**
 * Asynchronously retrieves metadata for a given inscription ID.
 *
 * @category Core
 * @param {string} [inscriptionId=getId()] - The unique identifier for the inscription. Defaults to the result of getId().
 * @param {string} [baseUrl=_baseUrl] - The base URL for the API endpoint. Defaults to _baseUrl.
 * @returns {Promise<OOMD.Metadata>} - A promise that resolves to the metadata object.
 * @throws Will throw an error if the fetch operation fails or if the response is not OK.
 */
async function getInscriptionMetadata(inscriptionId = getId(), baseUrl = _baseUrl) {
    // Fetch the metadata for the given inscription ID from the API endpoint
    const response = await fetch(prepareUrl(`/r/metadata/${inscriptionId}`, baseUrl));
    // Check if the response is not OK (status code outside the range 200-299)
    if (!response.ok) {
        throw new Error("No inscription for Id");
    }
    // Parse the response as a JSON string containing hexadecimal data
    const dataCBORasHexString = await response.json();
    // Convert the hexadecimal string to a buffer
    var dataAsBuffer = new Uint8Array(dataCBORasHexString.match(/[\da-f]{2}/gi).map(function (hex) {
        return parseInt(hex, 16);
    }));
    // Decode the buffer into the metadata object
    const data = decode(dataAsBuffer);
    // Return the decoded metadata
    return data;
}
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
async function getSatPage(sat, page = 0, baseUrl = _baseUrl) {
    try {
        // Fetch the page data for the given SAT number and page number from the API endpoint
        const response = await fetch(prepareUrl(`/r/sat/${sat}/${page}`, baseUrl));
        // Check if the response is not OK (status code outside the range 200-299)
        if (!response.ok) {
            throw new Error('Ord API call was unsuccessful');
        }
        // Parse the response as JSON
        const data = await response.json();
        // Extract the IDs, more flag, and page data from the response
        const ids = data.ids;
        const more = data.more;
        const pageData = data.page;
        // Return the extracted data as an object
        return { ids, more, page: pageData };
    }
    catch (error) {
        // Throw an error if the fetch operation fails
        throw error;
    }
}
/**
 * Asynchronously fetches all the inscriptions on a given SAT.
 * The function fetches the inscriptions in pages and continues fetching until there are no more pages.
 *
 * @category Core
 * @param {number} sat - The SAT number to fetch the inscriptions from.
 * @param {string} [baseUrl=_baseUrl] - Optional base URL for the fetch. Defaults to _baseUrl.
 * @returns {Promise<string[]>} - A promise that resolves with an array of the IDs of the inscriptions.
 */
async function getSatAll(sat, baseUrl = _baseUrl) {
    let ids = [];
    let more = true;
    let page = 0;
    while (more) {
        // Fetch the inscriptions for the current page
        await getSatPage(sat, page, baseUrl).then(data => {
            if (data != null) {
                // Concatenate the fetched IDs with the existing IDs
                ids = ids.concat(data.ids);
                // Check if there are more pages to fetch
                more = data.more;
                // Increment the page number for the next fetch
                page++;
            }
        }).catch(error => {
            // Stop fetching if an error occurs
            more = false;
        });
    }
    // Return the array of fetched IDs
    return ids;
}
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
async function getChildrenPage(inscriptionId = getId(), page = 0, baseUrl = _baseUrl) {
    let ids = []; // Initialize an empty array to store children IDs
    let more = true; // Flag to indicate if there are more pages
    try {
        // Fetch the children data from the API endpoint
        const response = await fetch(prepareUrl(`/r/children/${inscriptionId}/${page}`, baseUrl));
        // Check if the response is not OK (status code outside the range 200-299)
        if (!response.ok) {
            throw new Error('Ord API call was unsuccessful'); // Throw an error if the API call fails
        }
        // Parse the response as JSON
        const data = await response.json();
        // Concatenate the fetched IDs with the existing array
        ids = ids.concat(data.ids);
        // Update the 'more' flag based on the response
        more = data.more;
        // Update the page number based on the response
        page = data.page;
    }
    catch (error) {
        // Set 'more' to false if an error occurs
        more = false;
    }
    // Return the result as an object
    return { ids, more, page };
}
;
/**
 * Asynchronously fetches all the children of a given inscription.
 *
 * @category Core
 * @param {string} inscriptionId - The ID of the inscription to get the children of.
 *                                 Defaults to the ID obtained from `getId()`.
 * @param {string} [baseUrl=_baseUrl] - Optional baseUrl for the fetch.
 * @returns {Promise<Array<string>>} - A promise that resolves with an array of the IDs of the children.
 */
async function getChildrenAll(inscriptionId = getId(), baseUrl = _baseUrl) {
    let ids = []; // Initialize an empty array to store children IDs
    let more = true; // Flag to indicate if there are more pages
    let page = 0; // Initialize the page number
    // Loop to fetch all pages of children IDs
    while (more) {
        await getChildrenPage(inscriptionId, page, baseUrl).then(data => {
            if (data != null) {
                ids = ids.concat(data.ids); // Concatenate the fetched IDs with the existing array
                more = data.more; // Update the 'more' flag based on the response
                page++; // Increment the page number
            }
        }).catch(error => {
            more = false; // Set 'more' to false if an error occurs
        });
    }
    return ids; // Return the array of children IDs
}
;
/**
 * Extracts the inscription ID from the current URL.
 *
 * @returns {string} - The inscription ID extracted from the URL, or an empty string if the URL is invalid.
 */
function getInscriptionIdFromUrl() {
    // Split the URL path into parts using "/" as the delimiter
    const parts = window.location.pathname.split("/");
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
/**
 * Generates a content URL based on the provided ID.
 *
 * @group Main
 * @param {string} id - The ID to be used in the URL.
 * @returns {string} The generated content URL.
 */
function projectAsContentUrl(id) {
    let url = new String(`/content/${id}`); // Webpack workaround
    return url.toString();
}
/**
 * Fetches the content of the provided URL as a string.
 *
 * @param {string} url - The URL to fetch.
 * @returns {Promise<string | undefined>} A promise that resolves to a string if successful, or undefined if not.
 * @throws {Error} If the fetch operation fails.
 */
async function fetchUrlAaString(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const content = await response.text();
    return content;
}
/**
 * Fetches the content of the provided URL as an ArrayBuffer.
 *
 * @param {string} url - The URL to fetch.
 * @returns {Promise<ArrayBuffer | undefined>} A promise that resolves to an ArrayBuffer if successful, or undefined if not.
 * @throws {Error} If the fetch operation fails.
 */
async function fetchUrlAsBuffer(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
}
/**
 * Fetches the content of the provided URL as a data URL.
 *
 * @param {string} url - The URL to fetch.
 * @returns {Promise<string>} A promise that resolves to a data URL string if successful.
 * @throws {Error} If the fetch operation fails.
 */
async function fetchAsDataURL(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const blob = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
/**
 * Joins multiple ArrayBuffer objects into a single ArrayBuffer.
 *
 * @group Main
 * @param {ArrayBuffer[]} buffers - An array of ArrayBuffer objects to be joined.
 * @returns {ArrayBuffer} A single ArrayBuffer containing the concatenated data.
 */
function joinArrayBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buffer) => acc + buffer.byteLength, 0);
    const joinedBuffer = new Uint8Array(totalLength);
    let offset = 0;
    buffers.forEach(buffer => {
        joinedBuffer.set(new Uint8Array(buffer), offset);
        offset += buffer.byteLength;
    });
    return joinedBuffer.buffer;
}
/**
 * Converts an ArrayBuffer to a data URL.
 *
 * @group Main
 * @param {ArrayBuffer} buffer - The ArrayBuffer to be converted.
 * @param {string} contentType - The MIME type of the content.
 * @returns {Promise<string>} A promise that resolves to a data URL string if successful.
 * @throws {Error} If the conversion operation fails.
 */
function arrayBufferToDataURL(buffer, contentType) {
    const blob = new Blob([buffer], { type: contentType });
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
function getBaseUrl() {
    const parts = window.location.origin.split("/");
    const lookFor = ['content', 'preview', 'inscription', 'r'];
    let urlOut = [];
    if (parts.some(item => lookFor.includes(item))) {
        for (let index = 0; index < parts.length; index++) {
            if (lookFor.includes(parts[index]))
                break;
            urlOut.push(parts[index]);
        }
        return urlOut.join("/");
    }
    else {
        return window.location.origin;
    }
}
function prepareUrl(url, baseUrl) {
    if (url.includes("http"))
        return url;
    return `${baseUrl}${url}`;
}
//#endregion
//#region On Load Triggers
_baseUrl = getBaseUrl();
//#endregion
