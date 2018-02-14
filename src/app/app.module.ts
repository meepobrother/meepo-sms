import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { We7RouterModule, WE7_ROUTES } from 'meepo-we7-router';
import { WelcomeComponent } from './welcome/welcome';
import { AppHeaderComponent } from './welcome/header/header';
import { AppSidebarComponent } from './welcome/sidebar/sidebar';
import {
  DesignLibraryProp, DesignLibraryService,
  IDesignComponentModule, DESIGN_COMPONENTS
} from 'meepo-idesign-share';
import { both, entrys as smsEntrys, preview } from './meepo-sms/public_api';
import { HttpClientModule } from '@angular/common/http';
import { LogComponent } from './log/log';
import { SettingComponent } from './setting/setting';
import {
  NgZorroAntdModule
} from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgEachOf } from './ng-each-of';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    ...smsEntrys,
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
    FormsModule
  ],
  entryComponents: [
    WelcomeComponent,
    ...smsEntrys,
    SettingComponent,
    LogComponent
  ],
  providers: [{
    provide: DESIGN_COMPONENTS,
    useValue: []
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
