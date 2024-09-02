import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoneyService } from './shared/services/money.service';

import { TypeOrmModule } from '@nestjs/typeorm';

// GM Project
import { NavItem } from './gmproject/nav-item/entities/nav-item.entity';
import { User } from './gmproject/user/entities/user.entity';

import { NavItemModule } from './gmproject/nav-item/nav-item.module';

// Finances
import { Bill } from './finances/bill/entities/bill.entity';
import { Income } from './finances/income/entities/income.entity';
import { Category } from './finances/category/entities/category.entity';
import { Card } from './finances/card/entities/card.entity';
import { Institution } from './finances/institution/entities/institution.entity';
import { Objective } from './finances/objective/entities/objective.entity';
import { Origin } from './finances/origin/entities/origin.entity';
import { Payment } from './finances/payment/entities/payment.entity';
import { Debt } from './finances/debt/entities/debt.entity';
import { DebtPayment } from './finances/debt-payment/entities/debt-payment.entity';

import { BillModule } from './finances/bill/bill.module';
import { CardModule } from './finances/card/card.module';
import { CategoryModule } from './finances/category/category.module';
import { ContributionModule } from './finances/contribution/contribution.module';
import { IncomeModule } from './finances/income/income.module';
import { InstitutionModule } from './finances/institution/institution.module';
import { ObjectiveModule } from './finances/objective/objective.module';
import { OriginModule } from './finances/origin/origin.module';
import { PaymentModule } from './finances/payment/payment.module';
import { DebtModule } from './finances/debt/debt.module';
import { DebtPaymentModule } from './finances/debt-payment/debt-payment.module';

// Productivity
import { ListModule } from './productivity/list/list.module';
import { TaskModule } from './productivity/task/task.module';
import { CategoryTaskModule } from './productivity/category-task/category-task.module';

import { List } from './productivity/list/entities/list.entity';
import { Task } from './productivity/task/entities/task.entity';
import { CategoryTask } from './productivity/category-task/entities/category-task.entity';

// API
// import { GeneralModule } from './api/general/general.module';
import { FinancesModule } from './api/finances/finances.module';
import { Contribution } from './finances/contribution/entities/contribution.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_ONE,
      entities: [User, NavItem],
      name: process.env.DB_DATABASE_ONE,
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_TWO,
      entities: [
        Bill,
        Card,
        Category,
        Contribution,
        Income,
        Institution,
        Objective,
        Origin,
        Payment,
        Debt,
        DebtPayment,
      ],
      name: process.env.DB_DATABASE_TWO,
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_THREE,
      entities: [Task, List, CategoryTask],
      name: process.env.DB_DATABASE_THREE,
      synchronize: true,
    }),

    NavItemModule,
    // UserModule,

    // Finances
    BillModule,
    CardModule,
    CategoryModule,
    ContributionModule,
    IncomeModule,
    InstitutionModule,
    ObjectiveModule,
    OriginModule,
    PaymentModule,
    DebtModule,
    DebtPaymentModule,

    // Global
    // GeneralModule,

    // Finances
    FinancesModule,

    // Productivity
    ListModule,
    TaskModule,
    CategoryTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService, MoneyService],
})
export class AppModule {}
