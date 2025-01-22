[Open Ordial Stitch](../../README.md) / [OOST (Browser)](../README.md) / getChildrenAll

# Function: getChildrenAll()

> **getChildrenAll**(`inscriptionId`, `baseUrl`?): `Promise`\<`string`[]\>

Defined in: [browser/OOST.Core.ts:465](https://github.com/open-ordinal/open-ordinal-stitch/blob/0aafca5ac400fd4fbd267bbafa1a162a9dc20139/src/browser/OOST.Core.ts#L465)

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
