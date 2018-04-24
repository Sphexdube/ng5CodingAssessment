import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { WorkComponent } from '../app/components/work/work.component';
import { ApproachComponent } from '../app/components/approach/approach.component';
import { SecretComponent } from '../app/components/secret/secret.component';
import { CareersComponent } from '../app/components/careers/careers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/our-work',
    component: WorkComponent
  },
  {
    path: 'home/our-approach',
    component: ApproachComponent
  },
  {
    path: 'home/secret-sauce',
    component: SecretComponent
  },
  {
    path: 'home/careers',
    component: CareersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
