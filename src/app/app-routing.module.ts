import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { WhateverViewComponent } from './whatever-view/whatever-view.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'whatever-view', component: WhateverViewComponent, data: { text: 'WhateverView' } },
  { path: 'my-info', component: MyInfoComponent, data: { text: 'My Info' } },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
