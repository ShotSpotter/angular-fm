import {LinkedData} from '../../common/models/linked-data';

export const ComponentData: { [key: string]: any } = {
  content: '<b><code>Components</code></b> are the main building blocks for Angular applications. ' +
    'It contains the data and provides user interaction logics. ' +
    'It bridges the view and the model. ' +
    'Usually, components are small and has single responsibility. ' +
    'E.g. display user list, display user details. ' +
    'Basically, a component is a Typescript class that is decorated with <code>@Component</code> and metadata ' +
    'about the component such as <code>selector</code>, <code>template/templateUrls</code>, <code>styles/styleUrls</code>, ' +
    '<code>providers(Dependencies)</code> etc.',

  code: `
    @Component({
        selector: 'app-user', <span class="code-highlight">A unique selector</span>
        templateUrl: './user.component.html', <span class="code-highlight">(or can use inline template with template: '...')</span>
        styleUrls: ['./user.component.scss'], <span class="code-highlight">(or can use inline styling with styles: ['...'])</span>
        providers: [UserService] <span class="code-highlight">Declaration of dependencies the component has that <b>Angular</b> needs to inject</span>
    })
    export class UserComponent {

      constructor(
        private userService: UserService
        <span class="code-highlight">
        /*
          As you declared the dependency in the component metadata,
          Angular takes the responsibility of injecting the service to the component's constructor
        */
        </span>
      ) {
        ...
      }
    }
  `
}

export const ComponentFeatures: LinkedData[] = [
  {url: 'lifecycle', title: 'Lifecycle', icon: 'recycling'},
  {url: 'communication', title: 'Communication', icon: 'phone'}
]
