import { Injectable } from "@nestjs/common";
import { SkillWallet } from "./skillWallet";


@Injectable()
export class SkillWalletService {

    private skillwallet: SkillWallet[] = [
        new SkillWallet(1,new Map<number,string>([[1,"Nestjs"]]))
    ]



    findAll(): SkillWallet[]
    {
        return this.skillwallet;
    }

    addSkillToEmployee( id: number,skill: string):void
    {
        const skillWallet = this.skillwallet.find(sw => sw.id == id);

        if (skillWallet)
        {
            skillWallet.normalEmployeeSkills.set(id,skill);
        }
    }
}