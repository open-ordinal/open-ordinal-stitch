[Open Ordial Stitch](../../README.md) / [OOST (Browser)](../README.md) / getChildrenAll

# Function: getChildrenAll()

> **getChildrenAll**(`inscriptionId`, `baseUrl`?): `Promise`\<`string`[]\>

Defined in: [browser/OOST.Core.ts:465](https://github.com/open-ordinal/open-ordinal-stitch/blob/d38962cb789f4775e408d6021fab719d9aa7686e/src/browser/OOST.Core.ts#L465)

Asynchronously fetches all the children of a given inscription.

## Parameters

### inscriptionId

`string` = `...`

The ID of the inscription to get the children of.
                                Defaults to the ID obtained from `getId()`.

### baseUrl?

`string` = `_baseUrl`

Optional baseUrl for the fetch.

## Returns

`Promise`\<`string`[]\>

- A promise that resolves with an array of the IDs of the children.
