import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FinancesService } from './finances.service';
import { CategoryOptions } from 'src/shared/interfaces/categoryOptions';
import { DebtService } from './debt/debt.service';

@Controller('finances')
export class FinancesController {
  constructor(
    private readonly financesService: FinancesService,
    private readonly debtService: DebtService,
  ) {}

  @Get('getIncomesPer/:date')
  getIncomesPer(@Param('date') date: string) {
    return this.financesService.getIncomesPer(date);
  }

  @Get('getBillsPer/:date')
  async getBillsPer(@Param('date') date: string) {
    return this.financesService.getBillsPer(date);
  }

  @Get('getBillsInFormat')
  getBillsInFormat() {
    return this.financesService.getBillsInFormat();
  }

  @Get('getTopOneCategory')
  getTopOneCategory() {
    return this.financesService.getTopOneCategory();
  }

  @Get('getIncomesVsBills/:year')
  async getIncomesVsBills(@Param('year', ParseIntPipe) year: number) {
    return this.financesService.getIncomesVsBills(year);
  }

  @Get('getNoCompleteObjectives')
  async getNoCompleteObjectives() {
    return this.financesService.getNoCompleteObjectives();
  }

  @Get('getIncomes')
  async getIncomes() {
    return this.financesService.getIncomes();
  }

  @Get('getBills')
  async getBills() {
    return this.financesService.getBills();
  }

  @Post('getCategoriesToGraphic')
  async getCategoriesToGraphic(@Body('options') options: CategoryOptions) {
    return this.financesService.getCategoriesToGraphic(options);
  }

  @Get('getNoCompleteDebts')
  getNoCompleteDebts() {
    return this.debtService.getNoCompleteDebts();
  }
}
