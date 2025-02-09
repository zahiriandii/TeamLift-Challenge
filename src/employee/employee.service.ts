import { Injectable } from "@nestjs/common";
import { Employee } from "./employee";

@Injectable()
export class EmployeeService {
    private employees: Employee[] =[
        new Employee(1,'Andi','Zahiri'),
        new Employee(2,'Andii','Zahirrii')
    ];

    findAll(): Employee[] 
    {
        return this.employees;
    }

}