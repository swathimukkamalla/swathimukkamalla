import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FofirstComponent } from './fofirst/fofirst.component';
import{ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { BookinggComponent } from './bookingg/bookingg.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AreaComponent } from './area/area.component';
import { ChartComponent } from './chart/chart.component';
import { PiehartComponent } from './piehart/piehart.component';
// import {MatDividerModule,MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatListModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FofirstComponent,
    BookingComponent,
    PersonalinfoComponent,
    BookinggComponent,
    ConfirmComponent,
    AreaComponent,
    ChartComponent,
    PiehartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    // MatDividerModule,
    // MatToolbarModule,
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
