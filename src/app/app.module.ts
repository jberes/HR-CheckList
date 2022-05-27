import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhateverViewComponent } from './whatever-view/whatever-view.component';
import { IgxListModule, IgxAvatarModule, IgxGridModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WhateverViewComponent,
    MyInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxGridModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
