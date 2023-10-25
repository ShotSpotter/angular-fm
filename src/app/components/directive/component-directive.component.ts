import {Component} from "@angular/core";

@Component({
  selector: 'app-component-directive',
  template: `
    <app-card-component [data]="{title: 'Component Directive'}">
      <p class="paragraph mb-2">
        Components are the main building blocks for Angular applications. They are special directives and have a template, styles and TS class that defines behavior.
        These are nothing but <code>@Component</code> that we create them or use them in our apps.
      </p>
      <div class="code text-center pt-5">
        <code>
              <pre class="d-inline-flex text-start">
               {{codeBlock}}
              </pre>
        </code>
      </div>
    </app-card-component>
  `
})
export class ComponentDirectiveComponent {

  codeBlock = `@Component({
                 selector: 'app-component-overview',
                 templateUrl: './component-overview.component.html',
                 styleUrls: ['./component-overview.component.css']
              })`

}
