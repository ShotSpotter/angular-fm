export const ServiceData: { [key: string]: any } = {
  di: '<b><code>Dependency Injection</code></b> pattern is all about passing object to the dependent code. You don\'t have to deal with creating or instantiating dependent object in your class. You just have a framework or assembler create/instantiate and pass that dependency to you. The real benefit of <code>DI</code> is that it provides loose coupling. With loose coupling we can substitute the dependency with any other class of same type. In <b>Angular</b>, <code>DI</code> is performed through constructor. In <b>Angular</b> dependency are mostly service classes but is not limited to services only. String or function can also be used for dependency.',
  service: 'A <b><code>Service</code></b> is basically a class that are reusable and accessible by components and directives. E.g. fetching data from server, validating user inputs or other logics that are common across components.'
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
