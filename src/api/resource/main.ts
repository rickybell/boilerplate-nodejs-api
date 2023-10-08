import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { PostsService } from "../../app/service/postsService";
import { AxiosHttpClient } from "../../app/adapters/httpClient/axiosHttpClient";
import { AdapterError } from "../../app/exception/adapters/adapterError";
import { AdapterResponse } from "src/app/adapters/httpClient";
import { Post } from "src/app/infrastructure/entity/post";


@Controller('main')
export class MainController {

    @Get('posts/:id')
    public getPostsById(req: Request, res: Response): void {
        const postsService = new PostsService(new AxiosHttpClient());
        postsService.getPostsById(req.params.id)
            .then((r: AdapterError | AdapterResponse<Post>) => {
                res.status(r.status)
                res.send(r);
            })
    }
}
