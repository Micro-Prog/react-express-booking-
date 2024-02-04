import express, { NextFunction, Response, Request } from 'express';
import { deleteUser, getAllUsers, getByIdUser, updateUser } from '../../controllers/user_controller/user.controller';
import { verifyAdmin, verifyToken, verifyUser } from '../../utils/verification/jwt/jwtToken';


// define the router
const router = express.Router();


// integrate the verify function for user
// router.get("/checkuser/:id", verifyUser as NextFunction, (req: Request, res: Response, next: NextFunction) => {
//     try {

//         res.status(200).send("Hi user!");
//       } catch (error) {
//           return next(error)
//       }
// });

// integrate the verify function for admin
// router.get("/checkadmin/:id", verifyAdmin as NextFunction, (req: Request, res: Response, next: NextFunction) => {
//     try {
//         res.status(200).send("hi adming")
//     } catch (error) {
//         return next(error)
//     }
// });

// define the update route
router.put("/:id", verifyUser as NextFunction, updateUser);

// define the delete route
router.delete("/:id", verifyUser as NextFunction, deleteUser);

// define the get by id route
router.get("/:id", verifyUser as NextFunction, getByIdUser);

// define the get all route
router.get("/", verifyAdmin as NextFunction, getAllUsers);


export default router;