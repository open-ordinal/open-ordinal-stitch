[Open Ordial Stitch](../../README.md) / [OOST (Browser)](../README.md) / getSatAll

# Function: getSatAll()

> **getSatAll**(`sat`, `baseUrl`?): `Promise`\<`string`[]\>

Defined in: [browser/OOST.Core.ts:384](https://github.com/open-ordinal/open-ordinal-stitch/blob/0aafca5ac400fd4fbd267bbafa1a162a9dc20139/src/browser/OOST.Core.ts#L384)

Asynchronously fetches all the inscriptions on a given SAT.
The function fetches the inscriptions in pages and continues fetching until there are no more pages.

## Parameters

### sat

`number`

The SAT number to fetch the inscriptions from.

### baseUrl?

`string` = `_baseUrl`

Optional base URL for the fetch. Defaults to _baseUrl.

## Returns

`Promise`\<`string`[]\>

- A promise that resolves with an array of the IDs of the inscriptions.
