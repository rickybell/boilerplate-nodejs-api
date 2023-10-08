import axios from "axios";
import { AdapterResponse, BaseHttpClient, RequestOptions } from ".";
import { AdapterHandleError } from "../../exception/adapters/adapterError"

export class AxiosHttpClient<T> implements BaseHttpClient<T>{
    async get(params: RequestOptions): Promise<AdapterResponse<T> | Error> {
        return axios.get(params.url).then(response => {
            return ({ status: 200, data: response.data } as AdapterResponse<T>);
        }).catch((error) => {
            return AdapterHandleError(error)
        })
    }
}