import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingComponent } from './setting/setting.component';
import { JSONBuilderService } from './jsonbuilder.service';
import { dashboardComponent } from './dashboard/dashboard.component';
import { dropdownComponent } from './Components/Dropdown/dropdown.component';
import {AppRoutingModule} from './AppRouting';
import { FiltersPipe } from './Pipes/filters.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { tableComponent } from './Components/table/table.component';
import { buttonComponent } from './Components/Button/button.component';
import { FilterPipePipe } from './Pipes/filter-pipe.pipe';
import { FormsComponent } from './Components/forms/forms.component';
import { AppsComponent } from './Components/apps/apps.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SettingComponent,
    dashboardComponent,
    dropdownComponent,
    FiltersPipe,
    tableComponent,
    buttonComponent,
    FormsComponent,
    AppsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [JSONBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
