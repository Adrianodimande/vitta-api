import express, { Request, Response, NextFunction, response } from 'express';
import routerSignInAndSignUp from '../routes/signInAndSignUp';
import { HttpResponse } from './httpResponse';
import { STATUS500 } from '../settings/constants/constStatusCode';
import { SERVER_ERROR500 } from '../settings/constants/constCrud';
import routerClinic from '../routes/clinic';

const app = express();
const port = 3000;
app.use(express.json());
app.use('/auth', routerSignInAndSignUp);
app.use('/clinic', routerClinic);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    // console.log("Erro capturado ", error);
    if (error instanceof HttpResponse) {
        res.status(Number(error.status)).json(new HttpResponse(error.status, error.isError, error.message, error.data));
    } else {
        res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
    }

});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

