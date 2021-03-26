import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './basics/list-items/list-items.component';
import { HomePageComponent } from './basics/home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import { BuiltInDirectivesComponent } from './basics/built-in-directives/built-in-directives.component';
import { ServiceConsumerComponent } from './basics/service-consumer/service-consumer.component';
import { HttpClientDemoComponent } from './basics/http-client-demo/http-client-demo.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    HomePageComponent,
    BuiltInDirectivesComponent,
    ServiceConsumerComponent,
    HttpClientDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
