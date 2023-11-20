import { AxiosHttpClient } from "../../../../src/app/adapters/httpClient/axiosHttpClient"
import axios from "axios"
import { Post } from "../../../../src/app/infrastructure/entity/post"
import { AdapterResponse } from "../../../../src/app/adapters/httpClient"
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("AxiosHttpClient", () => {
    describe("get", () => {
        it('should return content given a request url', async () => {

            const axiosHttpClient = new AxiosHttpClient();
            const post = new Post();
            post.id = 1
            post.title = 'xxxx'
            post.body = 'xxxx'

            mockedAxios.get.mockResolvedValue({
                status: 200,
                data: post
            } as AdapterResponse<Post>
            )

            let response = await axiosHttpClient.get({
                url: "https://blablabla.com"
            });

            response = response as AdapterResponse<Post>
            const myPost = response.data as Post
            expect(response.status).toEqual(200)
            expect(myPost.title).toEqual("xxxx")
        })
    })
})