import { Status } from "@/lib/type/type"

export interface IUserData{
    username: string,
    password: string
}

export interface IInitialState{
user: IUserData,
status: Status
}