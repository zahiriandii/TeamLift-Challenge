import { Employee } from "src/employee/employee";
import { NormalEmployeeService } from "./normalemployee.service";
import { Controller, Get } from "@nestjs/common";

@Controller('NormalEmployees')
export class NormalEmployeeController {

    constructor(
        private readonly normalEmployeeService : NormalEmployeeService
    ){}


    @Get('get-all-employees')
    findAllEmployees(): Employee[]
    {
        return this.normalEmployeeService.findAll();
    }

}
