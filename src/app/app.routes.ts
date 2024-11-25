import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BeansListComponent} from "./components/beans/beans-list/beans-list.component";
import {BeanDetailsComponent} from "./components/beans/bean-details/bean-details.component";

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'beans/beans-list',
    component: BeansListComponent,
  },
  {
    path: 'beans/beans-list/:id',
    component: BeanDetailsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }

];
