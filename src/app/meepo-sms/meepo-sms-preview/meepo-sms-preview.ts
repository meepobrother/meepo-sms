import { Component, OnInit, KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';

export interface MeepoSmsProps {
    items: any[];
    children: any[];
}
export class MeepoSmsDefault implements MeepoSmsProps {
    items: any[] = [
        { title: '阿里云' },
        { title: '阿里大于' },
        { title: '云片' },
        { title: 'Submail' },
        { title: '螺丝帽' },
        { title: '容联云通讯' },
        { title: '互亿无线' },
        { title: '聚合数据' },
        { title: 'SendCloud' },
        { title: '百度云' },
        { title: '华信短信平台' },
        { title: '253云通讯（创蓝）' },
        { title: '融云' },
        { title: 'twilio' },
        { title: '腾讯云SMS' }
    ];
    children = [];
}
import { ReactComponent } from 'ng-react-component';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'meepo-sms-preview',
    templateUrl: './meepo-sms-preview.html',
    styleUrls: ['./meepo-sms-preview.scss']
})
export class MeepoSmsPreviewComponent extends ReactComponent<MeepoSmsProps, any> {
    constructor(
        _differs: KeyValueDiffers,
        ele: ElementRef,
        render: Renderer2,
        public http: HttpClient
    ) {
        super(_differs, ele, render);
    }
    ngOnInit() {
        this.http.get('');
    }

    onPropsChange() { }

    onStateChange() { }
}

