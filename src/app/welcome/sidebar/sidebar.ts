import { Component, OnInit } from '@angular/core';
import { smsConfigs } from '../../sms';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html'
})
export class AppSidebarComponent implements OnInit {
    constructor(
        public router: We7RouterService
    ) { }

    ngOnInit() { }

    go(_do: string) {
        this.router.go(_do, {}, false);
    }
}
