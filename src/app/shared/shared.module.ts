import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDH_-oWc4qBNezLOGx7o6-rjba9lZX2sik'
    }),
   ],
  exports: [
    FormsModule,
    AgmCoreModule,
  ] })
export class SharedModule { }
