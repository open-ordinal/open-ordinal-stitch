[Open Ordial Stitch](../../README.md) / [OOST (Browser)](../README.md) / getChildrenPage

# Function: getChildrenPage()

> **getChildrenPage**(`inscriptionId`, `page`, `baseUrl`?): `Promise`\<`any`\>

Defined in: [browser/OOST.Core.ts:423](https://github.com/open-ordinal/open-ordinal-stitch/blob/0aafca5ac400fd4fbd267bbafa1a162a9dc20139/src/browser/OOST.Core.ts#L423)

Asynchronously fetches the children of a given inscription.
If no inscription ID is provided, it defaults to using the ID obtained from `getId()`.

## Parameters

### inscriptionId

`string` = `...`

The ID of the inscription to get the children of.
                                Defaults to the ID of the page running it if none is given.

### page

`number` = `0`

The page number to fetch the children from.

### baseUrl?

`string` = `_baseUrl`

Optional baseUrl for the fetch.

## Returns

`Promise`\<`any`\>

- A promise that resolves to an object containing:
                                                                        - ids: An array of children IDs.
                                                                        - more: A boolean indicating if there are more pages.
                                                                        - page: The current page number.
