import { Module } from "@nestjs/common";
import { SkillWalletService } from "./skillWallet.service";
import { SkillWalletController } from "./skillWallet.controller";

@Module({
    providers: [SkillWalletService],
    controllers: [SkillWalletController]
})

export class SkillWalletModule {}