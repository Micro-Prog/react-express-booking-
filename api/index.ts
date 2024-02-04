import express, { Express, Request, Response , Application, NextFunction } from 'express';
import dotenv from 'dotenv';
const { dbConnection } = require('./src/utils/db/mongodb_connection/dbConnection')
import authRoute from './src/routes/auth/auth';
import roomsRoute from './src/routes/rooms/rooms';
import hotelsRoute from './src/routes/hotels/hotels';
import usersRoute from './src/routes/users/users';
import HttpException from './src/error_handling/exceptions/HttpException';
import cookieParser from 'cookie-parser';


//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

dbConnection()


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});



// *** middleware *** //

// read the json body
app.use(express.json())

// cookie parser
app.use(cookieParser())

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// error handling middleware
app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  
  // define middleware error status and message
  const errorStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong.";
  
  // return what you want
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errMessage,
    stack: err.stack,
  });
});


// set the listen port for express
app.listen(port, () => {
  console.log(`[FROM EXPRESS APP]: Server is Fire at http://localhost:${port}`);
});