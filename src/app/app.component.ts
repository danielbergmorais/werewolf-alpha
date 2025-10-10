import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    pageTitle: string = 'Were Wolf';
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    let route = this.activatedRoute.firstChild;
                    while (route?.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                filter(route => route?.outlet === 'primary'),
                mergeMap(route => route!.data)
            )
            .subscribe(data => {
                this.pageTitle = data['title'] || 'Were Wolf';
            });
    }
}
