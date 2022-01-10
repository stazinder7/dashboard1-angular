import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingComponent } from './setting/setting.component';
import { JSONBuilderService } from './jsonbuilder.service';
import { dashboardComponent } from './dashboard/dashboard.component';
import { dropdownComponent } from './Components/Dropdown/dropdown.component';
import {AppRoutingModule} from './AppRouting';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SettingComponent,
    dashboardComponent,
    dropdownComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JSONBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
