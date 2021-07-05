import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SplitPreviewComponent } from './split-preview/split-preview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { MergePreviewComponent } from './merge-preview/merge-preview.component';
import { ConverttopdfPreviewComponent } from './converttopdf-preview/converttopdf-preview.component';
import {EditPDFPreviewComponent} from './edit-pdfpreview/edit-pdfpreview.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './Homepage/navbar/navbar.component';
import { SectionComponent } from './Homepage/section/section.component';
import { ContainerComponent } from './Homepage/container/container.component';
import {MatCardModule} from '@angular/material/card';


import { NgxFileDropModule } from 'ngx-file-drop';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    SplitPreviewComponent,
    MergePreviewComponent,
    ConverttopdfPreviewComponent,
    EditPDFPreviewComponent,
    NavbarComponent,
    SectionComponent,
    ContainerComponent,
    routingComponents,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule,
    MatBadgeModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
