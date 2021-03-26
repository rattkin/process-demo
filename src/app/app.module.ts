import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableExporterModule } from 'mat-table-exporter';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirestoreDatePipe } from './firestore-date.pipe';
import { HistoryComponent } from './history/history.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './list/list.component';
import { ProcessEditorComponent } from './process-editor/process-editor.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './signin/signin.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatRippleModule } from '@angular/material/core';

registerLocaleData(localeCs);
@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        ProductComponent,
        ProcessEditorComponent,
        ProductListComponent,
        HistoryComponent,
        FirestoreDatePipe,
        SigninComponent,
        HomePageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatRippleModule,
        MatMomentDateModule,
        MatTableModule,
        MatSortModule,
        MatTableExporterModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        NgxChartsModule,
    ],
    exports: [
    ],
    providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { strict: true } },
        { provide: LOCALE_ID, useValue: 'cs', },
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
