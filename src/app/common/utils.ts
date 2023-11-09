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

export function flatten<T>(arr: T[]) {
  return arr.reduce((acc: T[], item: T) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

