import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { ConverttopdfPreviewComponent } from './converttopdf-preview/converttopdf-preview.component';
import { EditPDFPreviewComponent } from './edit-pdfpreview/edit-pdfpreview.component';
import { MergePreviewComponent } from './merge-preview/merge-preview.component';
import { PreviewComponent } from './preview/preview.component';
import { SplitPreviewComponent } from './split-preview/split-preview.component';

const routes: Routes = [
  {path: 'merge',component: MergePreviewComponent },
  {path: 'split',component: SplitPreviewComponent },
  {path: 'preview',component: PreviewComponent },
  {path: 'Homepage',component: AppComponent },
  {path: 'edit',component: EditPDFPreviewComponent },
  {path: 'convert',component: ConverttopdfPreviewComponent },
=======
import { HomepageComponent } from './homepage/homepage.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {path: 'upload-page', component: UploadPageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', component: HomepageComponent}
>>>>>>> af3f406e1871ee2d534f891278f9fdb6eb3c942b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ UploadPageComponent, HomepageComponent]