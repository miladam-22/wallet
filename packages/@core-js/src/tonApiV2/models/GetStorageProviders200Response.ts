/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StorageProvider } from './StorageProvider';
import {
    StorageProviderFromJSON,
    StorageProviderFromJSONTyped,
    StorageProviderToJSON,
} from './StorageProvider';

/**
 * 
 * @export
 * @interface GetStorageProviders200Response
 */
export interface GetStorageProviders200Response {
    /**
     * 
     * @type {Array<StorageProvider>}
     * @memberof GetStorageProviders200Response
     */
    providers: Array<StorageProvider>;
}

/**
 * Check if a given object implements the GetStorageProviders200Response interface.
 */
export function instanceOfGetStorageProviders200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "providers" in value;

    return isInstance;
}

export function GetStorageProviders200ResponseFromJSON(json: any): GetStorageProviders200Response {
    return GetStorageProviders200ResponseFromJSONTyped(json, false);
}

export function GetStorageProviders200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStorageProviders200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'providers': ((json['providers'] as Array<any>).map(StorageProviderFromJSON)),
    };
}

export function GetStorageProviders200ResponseToJSON(value?: GetStorageProviders200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'providers': ((value.providers as Array<any>).map(StorageProviderToJSON)),
    };
}
