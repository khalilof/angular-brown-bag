import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListItemsComponent} from './basics/list-items/list-items.component';
import {HomePageComponent} from './basics/home-page/home-page.component';
import {BuiltInDirectivesComponent} from './basics/built-in-directives/built-in-directives.component';
import {ServiceConsumerComponent} from './basics/service-consumer/service-consumer.component';
import {HttpClientDemoComponent} from './basics/http-client-demo/http-client-demo.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'item-list', component: ListItemsComponent },
  { path: 'built-in-directives', component: BuiltInDirectivesComponent },
  { path: 'services', component: ServiceConsumerComponent },
  { path: 'http-client', component: HttpClientDemoComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
