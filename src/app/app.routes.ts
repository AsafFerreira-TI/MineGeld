import { Routes } from '@angular/router';
import { HomepageComponent } from './minegeld/homepage/homepage.component';
import { LoginComponent } from './minegeld/login/login.component';
import { SigninComponent } from './minegeld/signin/signin.component';
import { CoursesComponent } from './minegeld/courses/courses.component';
import { EbooksComponent } from './minegeld/ebooks/ebooks.component';
import { GamesComponent } from './minegeld/games/games.component';
import { PatodinComponent } from './minegeld/patodin/patodin.component';
import { AboutUsComponent } from './minegeld/about-us/about-us.component';
import { HelpCenterComponent } from './minegeld/help-center/help-center.component';
import { PrivacyPoliceComponent } from './minegeld/privacy-police/privacy-police.component';
import { ForumsComponent } from './minegeld/forums/forums.component';
import { MyAccountComponent } from './minegeld/my-account/my-account.component';
import { PassiveIncomeComponent } from './minegeld/courses/passive-income/passive-income.component';
import { InvestmentInRealEstateFundsComponent } from './minegeld/courses/investment-in-real-estate-funds/investment-in-real-estate-funds.component';
import { IncomeAndExpenseManagementComponent } from './minegeld/courses/income-and-expense-management/income-and-expense-management.component';

export const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-in', component: SigninComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'ebooks', component: EbooksComponent},
  {path: 'interactive-games', component: GamesComponent},
  {path: 'patodin', component: PatodinComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'help-center', component: HelpCenterComponent},
  {path: 'privacy-police', component: PrivacyPoliceComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'my-account', component: MyAccountComponent},
  {path: 'courses/passive-income', component: PassiveIncomeComponent},
  {path: 'courses/investment-in-real-estate-funds', component: InvestmentInRealEstateFundsComponent},
  {path: 'courses/income-and-expense-management', component: IncomeAndExpenseManagementComponent}
];
