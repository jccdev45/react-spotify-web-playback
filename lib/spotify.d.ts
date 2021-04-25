import { SpotifyPlayOptions } from './types';
export declare function checkTracksStatus(token: string, tracks: string | string[]): Promise<any>;
export declare function getDevices(token: string): Promise<any>;
export declare function getPlaybackState(token: string): Promise<any>;
export declare function pause(token: string): Promise<Response>;
export declare function play(token: string, { context_uri, deviceId, offset, uris }: SpotifyPlayOptions): Promise<Response>;
export declare function previous(token: string): Promise<Response>;
export declare function next(token: string): Promise<Response>;
export declare function removeTracks(token: string, tracks: string | string[]): Promise<Response>;
export declare function saveTracks(token: string, tracks: string | string[]): Promise<Response>;
export declare function seek(token: string, position: number): Promise<Response>;
export declare function setDevice(token: string, deviceId: string, shouldPlay?: boolean | undefined): Promise<Response>;
export declare function setVolume(token: string, volume: number): Promise<Response>;