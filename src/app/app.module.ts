import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportsModule } from './modules/reports/reports.module';
import { StoreModule, } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { ReportsEffects} from './shared/state/reports/reports.effects'; 
import { reportReducer,} from './shared/state/reports/reports.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,    
    ReportsModule,
    RouterModule,    
    HttpClientModule,    
    StoreModule.forRoot(reportReducer),
    StoreModule.forFeature('reportState',reportReducer),
    EffectsModule.forRoot([ReportsEffects]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
