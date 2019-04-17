import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import { ActivateComponent } from './activate/activate.component';
import { SelectIDComponent } from './select-id/select-id.component';

//To implement i18n
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FrontDLComponent } from './front-dl/front-dl.component';
import { BackDLComponent } from './back-dl/back-dl.component';
import { SuccessDLComponent } from './success-dl/success-dl.component';
import { FrontHCComponent } from './front-hc/front-hc.component';
import { BackHCComponent } from './back-hc/back-hc.component';
import { SuccessHCComponent } from './success-hc/success-hc.component';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { UsePhotoComponent } from './use-photo/use-photo.component';
import { VerifiedComponent } from './verified/verified.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    TermOfUseComponent,
    ActivateComponent,
    SelectIDComponent,
    FrontDLComponent,
    BackDLComponent,
    SuccessDLComponent,
    FrontHCComponent,
    BackHCComponent,
    SuccessHCComponent,
    TakePhotoComponent,
    UsePhotoComponent,
    VerifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
