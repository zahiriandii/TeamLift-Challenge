import { Body, Controller, Param, Post } from "@nestjs/common";
import { SkillWalletService } from "./skillWallet.service";

@Controller('skillController')
export class SkillWalletController {

    constructor(
        private readonly skillWalletService: SkillWalletService
    )
    {}

    @Post('add-skill/:id')
    addSkillToEmployee(
        @Param('id') id : number,
        @Body('skill') skill: string ): void 
    {
        const result = this.skillWalletService.addSkillToEmployee(id,skill);
    }
}