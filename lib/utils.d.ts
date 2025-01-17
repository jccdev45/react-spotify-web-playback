export declare const canUseDOM: () => boolean;
export declare const STATUS: {
    ERROR: string;
    IDLE: string;
    INITIALIZING: string;
    READY: string;
    RUNNING: string;
    UNSUPPORTED: string;
};
export declare const TYPE: {
    DEVICE: string;
    FAVORITE: string;
    PLAYER: string;
    PROGRESS: string;
    STATUS: string;
    TRACK: string;
};
export declare function getSpotifyURIType(uri: string): string;
export declare function isEqualArray(A?: any, B?: any): boolean;
export declare function isNumber(value: unknown): value is number;
export declare function loadSpotifyPlayer(): Promise<any>;
export declare function parseVolume(value?: unknown): number;
/**
 * Round decimal numbers
 */
export declare function round(number: number, digits?: number): number;
export declare function validateURI(input: string): boolean;
