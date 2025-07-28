import express, { response } from 'express';
import { DoseController } from '../controllers/doseController';
import { ValidationDose } from '../services/validations/validationDose';
import sanitizeDose from '../services/sanitize/sanitizeDose';



const routerDose = express.Router();
const doseController = new DoseController();
routerDose.get('/', async (req, res) => {

    doseController.doseRead(req, res);

});
routerDose.post('/',
     sanitizeDose, 
     ValidationDose.validationDose, 
    async (req, res) => {

    doseController.doseRegister(req, res)

});
routerDose.put('/:id', 
    sanitizeDose, 
    ValidationDose.validationDose, 
    async (req, res) => {
   
    doseController.doseUpdate(req, res)

});
routerDose.delete('/:id', async (req, res) => {
    doseController.doseDelete(req, res)

});




export default routerDose;