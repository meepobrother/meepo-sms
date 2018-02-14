import { Component, OnInit, KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponentList } from 'ng-react-component';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-log',
    templateUrl: 'log.html'
})
export class LogComponent extends ReactComponentList<any, any> {
    data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        disabled: true,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }];
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
            console.log(this.data);
        });
    }

    onPropsChange() { }

    onStateChange() { }
}
