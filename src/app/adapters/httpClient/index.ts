import { AdapterError } from "@exceptions/adapters/adapterError";

export interface RequestOptions {
    url: string,
    body?: object,
    headers?: object
}
export interface AdapterResponse<T> {
    status: number,
    data: T
}

export interface BaseHttpClient<T> {
    get(params: RequestOptions, next: unknown): Promise<AdapterResponse<T> | AdapterError>;
    // post(params: RequestOptions): Promise<unknown>;
    // put(params: RequestOptions): Promise<unknown>;
    // delete(params: RequestOptions): Promise<unknown>;
}

