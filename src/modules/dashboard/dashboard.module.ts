/*libs*/
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {routing, dashboardRoutingProviders} from './dashboard.routing';

/*components*/
import {DashboardComponent} from './components/dashboard.component';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    exports :[
    	DashboardComponent
    ],
    providers: [dashboardRoutingProviders]
})

export class DashboardModule {
}