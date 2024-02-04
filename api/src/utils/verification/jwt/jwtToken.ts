import jwt, { JsonWebTokenError, JwtPayload, VerifyErrors } from 'jsonwebtoken';
import createError  from '../../../error_handling/error/error';
import { NextFunction, Request, Response, response } from 'express';
import { UserAuthInfoRequest } from '../../typescript/RequestForUser';


export const verifyToken = (req: UserAuthInfoRequest, res: Response, next: NextFunction) => {

    // if jwt secret not defined 
    if (!process.env.JWT_SECRET) {
        return next(createError(500, "Some Requirements Not Defined."));
    }

    // read and verify the token
    const token = req.cookies.access_token;

    if (!token) {
        return next(createError(401, "Not Authenticated."));
    }

    jwt.verify(token, process.env.JWT_SECRET, (error: VerifyErrors | null, user?: object | string) => {
        
        // if not valid
        if (error) {
            return next(createError(403, "Token Invalid."));
        }

        // if valid
        req.user = user as any;
        next();
    });
};

export const verifyUser = (req: UserAuthInfoRequest, res: Response, next: NextFunction) => {
    verifyToken(req as UserAuthInfoRequest, res as Response, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "Not Authorized."))
        }
    });
}

export const verifyAdmin = (req: UserAuthInfoRequest, res: Response, next: NextFunction) => {
    verifyToken(req as UserAuthInfoRequest, res as Response, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "Admin Not Authorized."))
        }
    })
}