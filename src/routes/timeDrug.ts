import express, { response } from 'express';
import { TimeDrugController } from '../controllers/timeDrugController';
import { ValidationTimeDrug } from '../services/validations/validationTimeDrug';
import sanitizetimeDrug from '../services/sanitize/sanitizeTimeDrug';





const routerTimeDrug = express.Router();
const timeDrugController = new TimeDrugController();
routerTimeDrug.get('/', async (req, res) => {

    timeDrugController.timeDrugRead(req, res);

});
routerTimeDrug.post('/',
     sanitizetimeDrug, 
     ValidationTimeDrug.validationTimeDrug, 
    async (req, res) => {

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