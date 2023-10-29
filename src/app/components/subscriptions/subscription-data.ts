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
    {url: 'bad', title: 'Bad Subscription', icon: 'thumb_down', color: 'warn'},
    {url: 'good', title: 'Good Subscription', icon: 'thumb_up', color: 'primary'}
  ]
}
