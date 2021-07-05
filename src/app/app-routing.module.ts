import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {path: 'upload-page', component: UploadPageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ UploadPageComponent, HomepageComponent]