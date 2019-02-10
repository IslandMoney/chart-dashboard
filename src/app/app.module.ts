import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatDialogModule,
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridsterModule } from 'angular-gridster2';
import { ChartsModule } from 'ng2-charts';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DocumentationComponent } from './documentation/documentation.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documentation', component: DocumentationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatSidenavModule, MatListModule, MatDialogModule, MatCardModule,
    GridsterModule,
    MarkdownModule.forRoot({ loader: HttpClient, markedOptions: { provide: MarkedOptions, useValue: { smartypants: true, breaks: true } } }),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
