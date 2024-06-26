import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { NotFoundError } from '../utils/error';
import { log } from 'console';


interface CustomRequest extends Request {
    user?: any; // Define the user property as optional
}


export async function getUserID(req: CustomRequest, res: Response, next: NextFunction):Promise<string>{
    const authHeader = localStorage.getItem('token')

    console.log("authheader from local storage "+authHeader)
    if (!authHeader) {
        throw new NotFoundError("header not found")
        // res.status(401).json({ message: 'Unauthorized' });
        // return;
    }
    
    const user = jwt.verify(authHeader, 'secret') as { userId: string; email:string; role: string; iat: number; exp: number; };
    if (!user) {
        throw new NotFoundError("user not found")
    }
 const userID = user.userId
return userID


}