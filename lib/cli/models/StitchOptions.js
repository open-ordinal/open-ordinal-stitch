/**
 * Represents the options for stitch operations.
 *
 * @group Classes
 */
export class StitchOptions {
    input;
    output;
    /**
     * Creates an instance of StitchOptions.
     *
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options = {}) {
        this.input = options.Input;
        this.output = options.Output;
    }
}
