/**
 * Represents the options for stitch operations.
 *
 * @group Classes
 */
export class StitchOptions {
    sat;
    parent;
    parts;
    contentType;
    /**
     * Creates an instance of StitchOptions.
     *
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options = {}) {
        this.sat = options.sat;
        this.parent = options.parent;
        this.parts = options.parts;
        this.contentType = options.contentType;
    }
}
