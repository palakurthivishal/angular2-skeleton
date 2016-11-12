import {Component, OnInit} from '@angular/core';
import 'bootstrap-less/js/bootstrap.js';

import '../css/main.less';


@Component({
    selector: 'my-app',
    template: require('../templates/app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}

