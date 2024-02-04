import { Request } from "express";

type user = {
    id: string,
    isAdmin: boolean,
}

export interface UserAuthInfoRequest extends Request {
  user: user
}