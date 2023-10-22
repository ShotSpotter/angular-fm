import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SharedService} from "../../common/shared.service";

@Component({
  selector: 'app-service',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Dependency Injection (DI) & Services in Angular</h2>
      <div class="container">
        <div class="paragraph">
          <code>Dependency Injection</code> pattern is all about passing object to the dependent code. The real benefit of <code>DI</code> is that it provides loose coupling.
          With loose coupling we can substitute the dependency with any other class of same type. In <b>Angular</b>, <code>DI</code> is performed through constructor.
          In <b>Angular</b> dependency are mostly service classes but is not limited to services only. String or function can also be used for dependency.

          <div class="mt-5">
            <h2 class="m-0">Dependency</h2>
            <code>
            <pre>
               {{dependency}}
            </pre>
            </code>
          </div>
          <div class="mt-2">
            <h2 class="m-0">Component level Dependency</h2>
            <label>When a provider is registered at the component level, a new instance of the service is created for each new instance of the component.</label>
            <code>
            <pre>
               {{dependencyConsumerComponent}}
            </pre>
            </code>
          </div>
          <div class="mt-2">
            <h2 class="m-0">Module level Dependency</h2>
            <label>When a provider is registered at the module level, a new instance of the service is created and the same instance is shared within all the components, directives and pipes within that module.</label>
            <code>
            <pre>
               {{dependencyConsumerModule}}
            </pre>
            </code>
          </div>
          <div class="mt-2">
            <h2 class="m-0">Root Level</h2>
            <label>When <code>providedIn: 'root'</code>, the service is available at the root application level, accessible to all the component, directives, pipes and modules in the app.</label>
            <code>
            <pre>
               {{dependencyRoot}}
            </pre>
            </code>
          </div>
          <div class="mt-2">
            <h2 class="m-0">Dependency through function</h2>
            <label>A dependency can also be provided through function as seen below.</label>
            <code>
            <pre>
               {{dependencyFunction}}
            </pre>
            </code>
          </div>
        </div>

        <h2 class="m-0 mt-1 paragraph p-2 text-center">
          <span class="">Message Published by Parent: <code>{{count}}</code></span>
        </h2>
        <div class="grid-lifecycle">
          <app-service-first-child></app-service-first-child>
          <app-service-second-child></app-service-second-child>
        </div>
      </div>
    </div>
  `,
  providers: [SharedService]
})
export class ServiceComponent implements OnInit, OnDestroy {

  count!: number;
  private _destroy$ = new Subject();

  constructor(
    private SharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this._destroy$))
      .subscribe(count => {
        this.count = count;
        this.SharedService.post(`${count}`);
      })
  }

  ngOnDestroy() {
    this._destroy$?.unsubscribe();
  }

  dependency = `
      @Injectable()
      class MyService {}
  `
  dependencyRoot = `
      @Injectable({
        providedIn: 'root'
      })
      class MyService {}
  `
  dependencyFunction = `
      export function myServiceFactory(arg) {
        return () => arg.get();
      }

      @NgModule({
        providers: [
          AnotherService,
          {
            provider: myServiceFactory,
            useFactory: myServiceFactory,
            deps: [AnotherService]
          }
        ],
        ...
      })
  `
  dependencyConsumerComponent = `
    @Component({
      selector: 'hero-list',
      template: '...',
      providers: [MyService]
    })
    class MyComponent {}
  `
  dependencyConsumerModule = `
    @NgModule({
      declarations: [MyComponent]
      providers: [MyService]
    })
    class MyModule {}
  `

}
