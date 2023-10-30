export const SubscriptionData: {
  [key: string]: any
} = {
  content: `
     <b><code>Angular</code></b> usage <b><code>RxJS</code></b> for handling asynchronous data and events which leads to better performance.
     <b><code>RxJS</code></b> is based on <b>Reactive Programming Patterns</b>.
     In <b><code>RxJS</code></b>, <b><code>Observables</code></b> are core concept.
     <b><code>Observables</code></b> are objects that we can subscribe to
     and emits data. Any subscriptions to the Observables should be managed if they emit data over time.
  `,
  items: [
    {
      url: 'bad',
      title: 'Bad Subscription',
      icon: 'thumb_down',
      color: 'warn',
      code: `
        @Component({
          selector: 'app-memory-leak-subscription',
          template: '...'
        })
        export class MemoryLeakSubscriptionComponent {

          constructor(
            protected someService: SomeService
          ) {
          }

          ngOnInit() {
            this.someService.getData().subscribe();
          }
        }
      `
    },
    {
      url: 'good',
      title: 'Good Subscription',
      icon: 'thumb_up',
      color: 'primary',
      code: `
        @Component({
          selector: 'app-no-memory-leak-subscription',
          template: '...'
        })
        export class NoMemoryLeakSubscriptionComponent {

          protected _destroy$ = new Subject();

          constructor(
            protected someService: SomeService
          ) {
          }

          ngOnInit() {
            this.someService.getData()
              .pipe(takeUntil(this._destroy$))
              .subscribe();
          }

          ngOnDestroy() {
            this._destroy$.next();
            this._destroy$.unsubscribe();
          }
        }
      `
    }
  ]
}
