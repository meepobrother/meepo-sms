import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'welcome',
    templateUrl: 'welcome.html'
})
export class WelcomeComponent implements OnInit {
    @Input() props: any = {
        pageProps: []
    };
    constructor() { }

    ngOnInit() { }
}
