import { Employee } from "src/employee/employee";

export class NormalEmployee extends Employee {
    constructor(
        
        public id: number,
        name: string,
        surname: string 
    )
    {
        super(id,name,surname)
    }
}