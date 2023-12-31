import {CardData} from '../../../common/components/card.component';

export const ComponentCommunicationData: {
  [key: string]: any
} = {
  content: 'Following are the techniques for communicating between components.'
}

export const ComponentCommunicationTechniques: CardData[] = [
  {
    'icon': 'switch_access_shortcut',
    'content': 'URL Path/Query Parameters',
    'iconColor': 'primary',
    'css': 'hover',
    'url': 'params'
  },
  {
    'icon': 'multiple_stop',
    'content': '@Input/@Output',
    'iconColor': 'primary',
    'css': 'hover',
    'url': 'bindings'
  },
  {
    'icon': 'lan',
    'content': 'Services',
    'iconColor': 'primary',
    'css': 'hover',
    'url': 'services'
  }
];
