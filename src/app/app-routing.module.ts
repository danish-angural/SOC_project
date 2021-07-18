import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
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


];



@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes,{
        useHash: true
      })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

export const routingComponents = [ UploadPageComponent, HomepageComponent]