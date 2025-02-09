import { Module } from '@nestjs/common';
import { NormalEmployeeModule } from './normalEmployee/normlaEmployee.module';
import { SkillWalletModule } from './skillWallet/skillWallet.module';


@Module({
  imports: [NormalEmployeeModule,SkillWalletModule],
  
})
export class AppModule {}
