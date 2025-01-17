/**
 * Represents the options for stitch operations.
 * 
 * @group Classes
 */
export class StitchOptions {
    sat?: number;
    parent?: string;
    parts?: string[];
    contentType?: string;

    /**
     * Creates an instance of StitchOptions.
     * 
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options: any = {}) {
        this.sat = options.sat;
        this.parent = options.parent;
        this.parts = options.parts;
        this.contentType = options.contentType;
    }
}
