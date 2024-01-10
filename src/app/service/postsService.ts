import config from "config";
import { Post } from "../infrastructure/entity/post";
import { AdapterResponse, BaseHttpClient, RequestOptions } from "../adapters/httpClient";
import { AdapterError } from "../exception/adapters/adapterError";
// @exceptions/adapters/adapterError";

export class PostsService {
    httpCLient: BaseHttpClient<Post>;
    constructor(httpClient: BaseHttpClient<Post>) {
        this.httpCLient = httpClient;
    }

    public async getPostsById(id: string): Promise<AdapterResponse<Post> | AdapterError > {
        const requestOptions: RequestOptions = {
            url: `${config.get("config.HttpClient.baseUrl")}/${id}`
        }
        return this.httpCLient.get(requestOptions,  AdapterError);
    }
}