import {Observable} from 'rxjs';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

export function currentRoute(router: Router, route: ActivatedRoute): Observable<ActivatedRouteSnapshot> {
  return router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => route.snapshot),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    )
}
