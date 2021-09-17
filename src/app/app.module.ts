import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { PlayerComponent } from './player/player.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table2Component } from './table2/table2.component';
import { SecondBarComponent } from './second-bar/second-bar.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ParComponent } from './par/par.component';
import { CourseListComponent } from './course-list/course-list.component'
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DropdownComponent,
    TableComponent,
    PlayerComponent,
    Table2Component,
    SecondBarComponent,
    ParComponent,
    CourseListComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCommonModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
