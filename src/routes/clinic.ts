import express, { response } from 'express';



import sanitizeClinic from '../services/sanitize/sanitizeClinic';
import { ClinicController } from '../controllers/clinicController';
import { ValidationClinic } from '../services/validations/validationClinic';


const routerClinic = express.Router();
const clinicController = new ClinicController();
routerClinic.get('/', async (req, res) => {

    clinicController.clinicRead(req, res);

});
routerClinic.post('/', sanitizeClinic, ValidationClinic.validationCreateClinic, async (req, res) => {
    clinicController.clinicRegister(req, res)

});
routerClinic.put('/:id', sanitizeClinic, ValidationClinic.validationCreateClinic, async (req, res) => {
    clinicController.clinicUpdate(req, res)

});
routerClinic.delete('/:id', async (req, res) => {
    clinicController.clinicDelete(req, res)

});




export default routerClinic;