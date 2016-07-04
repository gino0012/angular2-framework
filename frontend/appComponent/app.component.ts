import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {MainComponent} from '../mainComponent/main.component';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, MainComponent],
})

@RouteConfig([
    {path: "/", name: "root", redirectTo: ['Home']},
    {path: '/home', component: MainComponent, as: 'Home', useAsDefault: true},
    { path: '/**', redirectTo: ['Home'] }
])

export class AppComponent {

    constructor() {}
}