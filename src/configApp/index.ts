import { MainController } from '../api/resource/main';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import logger from "morgan";

export class SetupServer extends Server {
    constructor(private port = 4000) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupLogger();
        this.setupListen();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupLogger(): void {
        this.app.use(logger("tiny"))
    }

    private setupListen(): void {
        this.app.listen(this.port, () => console.log(`The server is listning on port ${this.port}`))
    }

    private setupControllers(): void {
        const mainController = new MainController();
        this.addControllers([mainController]);
    }

    public getApp(): Application {
        return this.app;
    }

}