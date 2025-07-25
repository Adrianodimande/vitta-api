import express, { response } from 'express';
import { DrugController } from '../controllers/drugController';
import sanitizeDrug from '../services/sanitize/sanitizeDrug';
import { ValidationDrug } from '../services/validations/validationDrug';


const routerDrug = express.Router();
const drugController = new DrugController();
routerDrug.get('/', async (req, res) => {

    drugController.DrugRead(req, res);

});
routerDrug.post('/',
     sanitizeDrug, 
     ValidationDrug.validationCreateDrug, 
     async (req, res) => {
    drugController.drugRegister(req, res)

});
routerDrug.put('/:id', 
    // sanitizeDrug, 
    ValidationDrug.validationCreateDrug, 
    async (req, res) => {
    drugController.drugUpdate(req, res)

});
routerDrug.delete('/:id', async (req, res) => {
    drugController.drugDelete(req, res)

});




export default routerDrug;