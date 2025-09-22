export interface ProtoGeneratorOptions {
    outputDir: string;
    inputDir?: string;
    configFile?: string;
}
export interface ProtoGeneratorConfig {
    inputs?: string[];
    thirdPartyInputs?: string[];
    tsProtoOptions?: {
        forceLong?: string;
        esModuleInterop?: boolean;
        outputClientImpl?: boolean;
    };
}
export declare function generateProtoTypes(options: ProtoGeneratorOptions): Promise<void>;
export declare function getBuiltinProtoPath(): string;
