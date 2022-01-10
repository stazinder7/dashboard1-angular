import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { dashboardComponent } from './dashboard/dashboard.component';
import { dropdownComponent } from './Components/Dropdown/dropdown.component';
const routes: Routes = [
    { path: '', component: dashboardComponent },
    { path: 'dashboard', component: dashboardComponent },
    { path: 'dropdown', component: dropdownComponent },
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }