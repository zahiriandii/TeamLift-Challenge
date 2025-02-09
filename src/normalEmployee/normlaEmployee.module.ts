
import { Module } from '@nestjs/common';
import { NormalEmployeeService } from './normalemployee.service';
import { NormalEmployeeController } from './normalemployee.controller';

@Module({
    providers:[NormalEmployeeService],
    controllers: [NormalEmployeeController]
})

export class NormalEmployeeModule {}