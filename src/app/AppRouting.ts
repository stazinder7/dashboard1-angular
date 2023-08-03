import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { dashboardComponent } from './dashboard/dashboard.component';
import { dropdownComponent } from './Components/Dropdown/dropdown.component';
import { tableComponent } from './Components/table/table.component';
import { buttonComponent } from './Components/Button/button.component';
import { FormsComponent } from './Components/forms/forms.component';
import { AppsComponent } from './Components/apps/apps.component';

const routes: Routes = [
  { path: '', component: dashboardComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'dropdown', component: dropdownComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'table', component: tableComponent },
  { path: 'buttons', component: buttonComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
