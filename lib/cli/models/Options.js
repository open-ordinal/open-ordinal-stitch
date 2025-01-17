/**
 * Represents the options for split / stitch operations.
 *
 * @group Classes
 */
export class Options {
    Input;
    Output;
    MaxSize;
    /**
     * Creates an instance of Options.
     *
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options = {}) {
        this.Input = options.Input;
        this.Output = options.Output;
        this.MaxSize = options.Maxsize !== undefined ? Number.parseInt(options.Maxsize) : 350000;
    }
}
