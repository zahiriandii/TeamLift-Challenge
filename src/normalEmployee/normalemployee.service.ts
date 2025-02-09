import { Injectable } from "@nestjs/common";
import { Employee } from "src/employee/employee";

@Injectable()
export class NormalEmployeeService {

    private normalEmployees: Employee[] =  [
        new Employee(1,'New',"Employee")
    ];


    findAll(): Employee[] {
        return this.normalEmployees;
    }
}