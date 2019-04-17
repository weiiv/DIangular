import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/index';
import { TermOfUseComponent } from './term-of-use/index';
import { ActivateComponent } from './activate/index';
import { SelectIDComponent } from './select-id/index';
import { FrontDLComponent } from './front-dl/front-dl.component';
import { BackDLComponent } from './back-dl/back-dl.component';
import { SuccessDLComponent } from './success-dl/success-dl.component';
import { FrontHCComponent } from './front-hc/front-hc.component';
import { BackHCComponent } from './back-hc/back-hc.component';
import { SuccessHCComponent } from './success-hc/success-hc.component';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { VerifiedComponent } from './verified/verified.component';
import { UsePhotoComponent } from './use-photo/use-photo.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'TermofUse', component: TermOfUseComponent },
  { path: 'activate', component: ActivateComponent },
  { path: 'selectID', component: SelectIDComponent },
  { path: 'frontdl', component: FrontDLComponent },
  { path: 'backdl', component: BackDLComponent },
  { path: 'successdl', component: SuccessDLComponent },
  { path: 'fronthc', component: FrontHCComponent },
  { path: 'backhc', component: BackHCComponent },
  { path: 'successhc', component: SuccessHCComponent },
  { path: 'takephoto', component: TakePhotoComponent },
  { path: 'usephoto', component: UsePhotoComponent },
  { path: 'verified', component: VerifiedComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
