import {ThemePalette} from '@angular/material/core';

export const HomeData: {
  content: string,
  icon: string,
  iconColor: ThemePalette
}[] = [
  {
    icon: 'terminal',
    iconColor: 'primary',
    content: `<b><code>Angular</code></b> is an open-source JS framework based on <code>Typescript</code> & <code>RxJs</code> (Reactive JavaScript) used for building <code>SPAs</code> (Single Page Applications)`
  },
  {
    icon: 'swap_horiz',
    iconColor: 'primary',
    content: `<b>Data Binding</b>: Provides 2way data binding between the model and DOM`
  },
  {
    icon: 'input',
    iconColor: 'primary',
    content: `<b>Dependency Injection</b>: Angular provides the dependencies that the application components, directives or modules need`
  },
  {
    icon: 'list_alt',
    iconColor: 'primary',
    content: `<b>Advanced forms</b>: Provides Reactive Forms and Model Driven forms`
  },
  {
    icon: 'alt_route',
    iconColor: 'primary',
    content: `<b>Routing</b>: Great routing features to navigate between pages`
  },
  {
    icon: 'view_comfy_alt',
    iconColor: 'primary',
    content: `<b>Modular</b>: Provides modularity where components can be modularized and reused in different parts of the application`
  },
  {
    icon: 'data_object',
    iconColor: 'primary',
    content: `<b>OOP concepts & Types</b>: Angular is based on Typescript which supports OOP concepts like Inheritance, Interfaces/Polymorphism. Typescript is also strongly typed that helps to find issues/bugs while in development`
  },
  {
    icon: 'forum',
    iconColor: 'primary',
    content: `Maintained by Google and has huge community support`
  },
]
