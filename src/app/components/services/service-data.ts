export const ServiceData: { [key: string]: any } = {
  di: `
   <div class="mb-2">
     <b><code>Dependency Injection</code></b> pattern is all about segregating object instantiation and object dependency.
     Some of the benefits of DI pattern are <b>loose coupling between dependent and dependency</b>, <b>can be substituted during runtime or testing etc.</b>
   </div>
   <div class="mb-2">
     In <b>Angular</b>, <code>DI</code> is performed through constructor.
     In <b>Angular</b> dependency are mostly <b>service</b> classes but is not limited to services only.
     String or function can also be used for dependency.
   </div>
   <div class="mb-5">
    A <b><code>Service</code></b> is basically a class that are reusable and accessible by components and directives.
    E.g. fetching data from server, validating user inputs or other logics that are common across components.
   </div>
  `,
  service: ''
}

export const ServiceDataItem: {
  title: string,
  content?: string,
  code?: string
}[] = [
  {
    title: 'Dependency',
    code: `
      @Injectable()
      class MyService {}
    `
  },
  {
    title: 'Component level Dependency',
    content: 'When a provider is registered at the component level, a new instance of the service is created for each new instance of the component.',
    code: `
      @Component({
        selector: 'app-my-component',
        template: '...',
        providers: [MyService]
      })
      class MyComponent {}
    `
  }, {
    title: 'Module level Dependency',
    content: 'When a provider is registered at the module level, a new instance of the service is created\n                          and the same instance is shared within all the components, directives and pipes within that module.',
    code: `
      @NgModule({
        declarations: [MyComponent]
        providers: [MyService]
      })
      class MyModule {}
    `
  }, {
    title: 'Root Level Dependency',
    content: 'When <code>providedIn: \'root\'</code>, the service is available at the root application\n                          level, accessible to all the component, directives, pipes and modules in the app.',
    code: `
      @Injectable({
        providedIn: 'root'
      })
      class MyService {}
    `
  }, {
    title: 'Dependency through function',
    content: 'A dependency can also be provided through function as seen below.',
    code: `
      export function myServiceFactory(arg) {
        return () => arg.get();
      }

      @NgModule({
        providers: [
          AnotherService,
          {
            provider: myServiceFactory, // dependency token
            useFactory: myServiceFactory,
            deps: [AnotherService]
          }
        ],
        ...
      })
    `
  }
]
