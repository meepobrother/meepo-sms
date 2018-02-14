import { Component, OnInit, KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponentList } from 'ng-react-component';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-log',
    templateUrl: 'log.html'
})
export class LogComponent extends ReactComponentList<any, any> {
    data = [];
    constructor(
        _differs: KeyValueDiffers,
        ele: ElementRef,
        render: Renderer2,
        public http: HttpClient,
    ) {
        super(_differs, ele, render);
    }

    ngOnInit() {
        const url = this.createWebUrl('getallsmslog', {});
        this.http.get(url).subscribe((res: any[]) => {
            this.data = res;
        });
    }

    onPropsChange() { }

    onStateChange() { }
}
