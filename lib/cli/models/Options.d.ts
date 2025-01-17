/**
 * Represents the options for split / stitch operations.
 *
 * @group Classes
 */
export declare class Options {
    Input?: string;
    Output?: string;
    MaxSize: number;
    /**
     * Creates an instance of Options.
     *
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options?: any);
}
