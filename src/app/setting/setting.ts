import { Component, OnInit, KeyValueDiffers, ElementRef, Renderer2, isDevMode } from '@angular/core';
import { ReactComponentSetting } from 'ng-react-component';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { DesignPropsService } from 'meepo-idesign-share';

export interface SmsSettingProps {
    items: any[];
    children: any[];
    position: string;
}
@Component({
    selector: 'app-setting',
    templateUrl: 'setting.html'
})
export class SettingComponent extends ReactComponentSetting<SmsSettingProps, any> {
    params = {
        m: 'imeepos_opensms'
    };

    constructor(
        _differs: KeyValueDiffers,
        ele: ElementRef,
        render: Renderer2,
        public http: HttpClient,
        fb: FormBuilder,
        p: DesignPropsService
    ) {
        super(_differs, ele, render, fb, p);
    }

    ngOnInit() {
        super.ngOnInit();
        const url = this.createWebUrl('getallsms', {});
        this.props.position = 'top';
        this.http.get(url).subscribe((res: any[]) => {
            this.setProps({
                ...this.props,
                ...{ items: res }
            });
            this.props.items.map(item => {
                this.checkFormGroup(item.code, item.setting);
            });
            this.form.valueChanges.subscribe((change) => {
                this.saveSetting(change);
            });
        });
    }

    saveSetting(data: any) {
        const url = this.createWebUrl('saveallsms', {}, true);
        this.http.post(url, data).subscribe(res => {
            console.log(res);
        });
    }

    onPropsChange() { }
    onStateChange() { }
}
