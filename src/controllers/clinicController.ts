import { STATUS200, STATUS201, STATUS400, STATUS401, STATUS409, STATUS500 } from "../settings/constants/constStatusCode";
import { CREATE_CONFLICT409, CREATE_SUCCESS201, READ_SUCCESS200, SERVER_ERROR500 } from "../settings/constants/constCrud";
import { HttpResponse } from "../server/httpResponse";
import { ClinicRepository } from "../repository/clinicRepository";

export class ClinicController extends ClinicRepository {
 

    async clinicRegister(req: any, res: any) {
  
  
          try {
  
              const findClinic = await this.findClinic(req.body.email);
  
              if (findClinic) {
                  return res.status(STATUS409).json(new HttpResponse(STATUS409, true, CREATE_CONFLICT409, []));
              }
  
  
              await this.registerClinic(req.body);
              res.status(STATUS201).json(new HttpResponse(STATUS201, false, CREATE_SUCCESS201, []));
  
          } catch (error) {
              res.status(STATUS500).json(new HttpResponse(STATUS500, true, SERVER_ERROR500, []));
          }
  
  
      }
}