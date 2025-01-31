[Open Ordial Stitch](../../README.md) / [OOST (Library)](../README.md) / split

# Function: split()

> **split**(`options`): `Promise`\<`string`[]\>

Defined in: [cli/OOST.ts:77](https://github.com/open-ordinal/open-ordinal-stitch/blob/827f87564b824cc51a6036c6df1893971614aa24/src/cli/OOST.ts#L77)

Splits a file into smaller parts based on the provided options.

## Parameters

### options

[`SplitOptions`](../classes/SplitOptions.md)

An object containing the input file path, output directory, and maximum size for each part.

## Returns

`Promise`\<`string`[]\>

A promise that resolves when the splitting process is complete.
