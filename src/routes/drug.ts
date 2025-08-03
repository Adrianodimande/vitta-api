import express, { response } from 'express';
import { DrugController } from '../controllers/drugController';
import sanitizeDrug from '../services/sanitize/sanitizeDrug';
import { ValidationDrug } from '../services/validations/validationDrug';
import { DrugRepository } from '../repository/drugRepository';
import { AgentController } from '../controllers/agent/agentController';
import { AgentIa } from '../services/agent/agentIa';
import { TimeDrugRepository } from '../repository/timeDrugRepository';
import { TimeDrugController } from '../controllers/timeDrugController';


const routerDrug = express.Router();
const agentIa = new AgentIa();
const agentController = new AgentController(agentIa);
const drugRepository = new DrugRepository();
const timeDrugRepository=new TimeDrugRepository();
const timeDrugController = new TimeDrugController(timeDrugRepository);

const drugController = new DrugController(drugRepository, agentController, timeDrugController);
routerDrug.get('/', async (req, res) => drugController.DrugRead(req, res));

routerDrug.get('/user/:id', async (req, res) => drugController.DrugReadByUserId(req, res));

routerDrug.post('/',
    // sanitizeDrug,
    // ValidationDrug.validationDrug,
    async (req, res) => {
    
        drugController.drugRegister(req, res)

    });
routerDrug.put('/:id',
    sanitizeDrug,
    ValidationDrug.validationDrug,
    async (req, res) => {
console.log('dilogo');
        drugController.drugUpdate(req, res)

    });
routerDrug.delete('/:id', async (req, res) => {
    drugController.drugDelete(req, res)

});




export default routerDrug;