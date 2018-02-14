import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { We7RouterModule, WE7_ROUTES } from 'meepo-we7-router';
import { AppHeaderComponent } from './welcome/header/header';
import { AppSidebarComponent } from './welcome/sidebar/sidebar';
import {
  DesignLibraryProp, DesignLibraryService,
  IDesignComponentModule, DESIGN_COMPONENTS
} from 'meepo-idesign-share';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LogComponent } from './log/log';
import { SettingComponent } from './setting/setting';
import {
  NgZorroAntdModule
} from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgEachOf } from './ng-each-of';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateHttpLoader(http: HttpClient) {
  if (isDevMode()) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  } else {
    return new TranslateHttpLoader(http, './addons/imeepos_opensms/template/web/assets/i18n/', '.json');
  }
}
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SettingComponent,
    LogComponent,
    NgEachOf
  ],
  imports: [
    BrowserModule,
    We7RouterModule.forRoot([{
      path: 'setting',
      component: SettingComponent
    }, {
      path: 'log',
      component: LogComponent
    }]),
    IDesignComponentModule.forRoot([], false),
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [
    SettingComponent,
    LogComponent
  ],
  providers: [{
    provide: DESIGN_COMPONENTS,
    useValue: []
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
