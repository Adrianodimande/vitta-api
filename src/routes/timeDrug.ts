import express, { response } from 'express';
import { TimeDrugController } from '../controllers/timeDrugController';
import { ValidationTimeDrug } from '../services/validations/validationTimeDrug';
import sanitizetimeDrug from '../services/sanitize/sanitizeTimeDrug';
import { DrugRepository } from '../repository/drugRepository';
import { TimeDrugRepository } from '../repository/timeDrugRepository';





const routerTimeDrug = express.Router();

const timeDrugRepository=new TimeDrugRepository();
const timeDrugController = new TimeDrugController(timeDrugRepository);
routerTimeDrug.get('/user/:id', async (req, res) => {

    timeDrugController.readTimeDrugPutUserId(req, res);

});
routerTimeDrug.post('/',
    //  sanitizetimeDrug, 
    //  ValidationTimeDrug.validationTimeDrug, 
    async (req, res) => {
console.log('ta aqui');
        timeDrugController.timeDrugRegister(req, res)

    });
routerTimeDrug.put('/:id',
    sanitizetimeDrug, 
    ValidationTimeDrug.validationTimeDrug, 
    async (req, res) => {

        timeDrugController.timeDrugUpdate(req, res)

    });
routerTimeDrug.delete('/:id', async (req, res) => {
    timeDrugController.timeDrugDelete(req, res)

});




export default routerTimeDrug;