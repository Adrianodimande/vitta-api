import express, { response } from 'express';
import { AuthController } from '../controllers/authController';
import { HttpResponse } from '../server/httpResponse';
import { stdin } from 'process';
import { Sanitize } from '../services/sanitize/sanitize';
import sanitizeSignInAndSignUp from '../services/sanitize/sanitizeSignInAndSignUp';
import { ValidationUser } from '../services/validations/validationUser';


const routerSignInAndSignUp = express.Router();
const authController = new AuthController();
routerSignInAndSignUp.post('/signIn', async (req, res) => {

    authController.signIn(req, res);

});
routerSignInAndSignUp.post('/signUp',sanitizeSignInAndSignUp,ValidationUser.validationCreateUser, async (req, res) => {

    authController.signUp(req, res)

});




export default routerSignInAndSignUp;