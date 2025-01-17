/**
 * Represents the options for split operations.
 *
 * @group Classes
 */
export declare class SplitOptions {
    input?: string;
    output?: string;
    maxSize: number;
    /**
     * Creates an instance of SplitOptions.
     *
     * @param options - An object containing the input file path, output file path, and maximum size for each part.
     */
    constructor(options?: any);
}
