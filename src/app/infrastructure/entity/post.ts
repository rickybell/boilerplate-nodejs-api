import { User } from "./user"

export interface BasePost {
    id: number
    title: string
    body: string
    user: User

}

export class Post implements BasePost {
    id: number
    title: string
    body: string
    user: User
    /**
     *
     */
    constructor() {
    }
}