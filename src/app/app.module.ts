import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from "./backend-frame/my-common/page-not-found/page-not-found.component";
import {ComponentsModule} from "./backend-frame/my-common/components/components.module";
import {ProvidersModule} from "./backend-frame/my-common/providers/providers.module";
import {InputTextModule, PasswordModule} from "primeng/primeng";
import {LoginModule} from "./login/login.module";

const appRoutes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "backend-frame", loadChildren: './backend-frame/backend-frame.module#BackendFrameModule', data: { preload: true }},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    ComponentsModule,InputTextModule,
    ReactiveFormsModule,
    ProvidersModule,
    LoginModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
