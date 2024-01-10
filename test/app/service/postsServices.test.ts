import { PostsService } from "../../../src/app/service/postsService"
import { AdapterResponse, BaseHttpClient, RequestOptions } from "../../../src/app/adapters/httpClient/index"
import { AxiosHttpClient } from "../../../src/app/adapters/httpClient/axiosHttpClient"
import { Post } from "../../../src/app/infrastructure/entity/post"
import { AdapterError } from "../../../src/app/exception/adapters/adapterError"
import { describe, expect, it } from "@jest/globals"

describe("PostsService", () => {
    describe("getPostsById", () => {
        it('should return Post when given Id', () => {
            const post = new Post();
            post.id = 1
            post.title = 'xxxx'
            post.body = 'xxxx'

            const adapterFake: BaseHttpClient<Post> = new AxiosHttpClient()

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            adapterFake.get = (_params: RequestOptions) => {
                const response: AdapterResponse<Post> = {
                    status: 200,
                    data: post
                }

                return Promise.resolve(response)

            }
            const postsService = new PostsService(adapterFake)
            postsService.getPostsById("1").then((result) => {
                result = result as AdapterResponse<Post>
                expect(result.data.title).toEqual("xxxx")
            })
        })
        it('should return an Error when post doesn\'t found.', async () => {
            const post = new Post();
            post.id = 1
            post.title = 'xxxx'
            post.body = 'xxxx'

            const adapterFake: BaseHttpClient<Post> = new AxiosHttpClient()

            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                adapterFake.get = (_params: RequestOptions) => {
                    const response: AdapterError = {
                        status: 404,
                        message: "Not Found",
                        name: ""
                    }
                    return Promise.resolve(response)
                }
                const postsService = new PostsService(adapterFake)

                await postsService.getPostsById("1").then(response => {
                    response = response as AdapterError
                    
                    expect(response.status).toEqual(404)
                    expect(response.message).toEqual("Not Found")
                })
            } catch (error) {
                expect(error).toEqual("error");
            }
        })
    })
})