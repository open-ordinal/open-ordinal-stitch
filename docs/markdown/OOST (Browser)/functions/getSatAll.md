[Open Ordial Stitch](../../README.md) / [OOST (Browser)](../README.md) / getSatAll

# Function: getSatAll()

> **getSatAll**(`sat`, `baseUrl`?): `Promise`\<`string`[]\>

Defined in: [browser/OOST.Core.ts:384](https://github.com/open-ordinal/open-ordinal-stitch/blob/d38962cb789f4775e408d6021fab719d9aa7686e/src/browser/OOST.Core.ts#L384)

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
