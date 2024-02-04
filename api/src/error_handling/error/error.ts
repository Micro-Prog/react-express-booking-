import HttpException from "../exceptions/HttpException";


const createError = (status: number, message: string) => {
    const err = new Error() as HttpException;
    err.status = status;
    err.message = message;

    return err;
}

export default createError;