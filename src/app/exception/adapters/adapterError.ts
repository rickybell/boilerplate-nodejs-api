import { AxiosError, isAxiosError } from "axios";

export interface AdapterBaseError {
    status: number,
    message: string
}

export class AdapterError extends Error implements AdapterBaseError {
    status: number
    constructor(status: number, message: string) {
        super();
        this.status = status
        this.message = message
    }
}

export class AdapterBadRequestError extends AdapterError { }

export class AdapterGenericError extends AdapterError { }

export const AdapterHandleError = (error: Error) => {
    if (isAxiosError(error)) {
        if (error.code == AxiosError.ERR_BAD_REQUEST) {
            return new AdapterBadRequestError(
                error.response.status,
                error.response.statusText
            )
        }
    }
    return new AdapterGenericError(500, error.message)
}
