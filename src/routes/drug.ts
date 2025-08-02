import express, { response } from 'express';
import { DrugController } from '../controllers/drugController';
import sanitizeDrug from '../services/sanitize/sanitizeDrug';
import { ValidationDrug } from '../services/validations/validationDrug';
import { DrugRepository } from '../repository/drugRepository';
import { AgentController } from '../controllers/agent/agentController';
import { AgentIa } from '../services/agent/agentIa';


const routerDrug = express.Router();
const agentIa = new AgentIa();
const agentController = new AgentController(agentIa);
const drugRepository = new DrugRepository();

const drugController = new DrugController(drugRepository, agentController);
routerDrug.get('/', async (req, res) => drugController.DrugRead(req, res));

routerDrug.get('/user/:id', async (req, res) => drugController.DrugReadByUserId(req, res));

routerDrug.post('/',
    sanitizeDrug,
    ValidationDrug.validationDrug,
    async (req, res) => {
        drugController.drugRegister(req, res)

    });
routerDrug.put('/:id',
    sanitizeDrug,
    ValidationDrug.validationDrug,
    async (req, res) => {

        drugController.drugUpdate(req, res)

    });
routerDrug.delete('/:id', async (req, res) => {
    drugController.drugDelete(req, res)

});




export default routerDrug;