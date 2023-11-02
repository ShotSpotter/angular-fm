export interface UserNode {
  id: any;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state?: string;
  zip?: string;
  phone: string;
  birthdate: string;
  secured?: boolean;
  children?: UserNode[]
}

export function getById(user: UserNode, id: any): UserNode | null {
  let result = null
  if (id === user.id) {
    return user
  } else {
    if (user.children) {
      user.children.some(node => result = getById(node, id));
    }
    return result;
  }
}

export const USER_LIST: UserNode[] = [
  {
    'id': '85-400-2766',
    'firstName': 'Caye',
    'lastName': 'Rubinowitsch',
    'email': 'crubinowitsch0@live.com',
    'address': '74802 Red Cloud Circle',
    'city': 'Architect',
    'zip': '6213',
    'phone': '541-528-0026',
    'birthdate': '2/10/2014',
    'children': [
      {
        'id': '36-845-4814',
        'firstName': 'Florri',
        'lastName': 'Timmis',
        'email': 'ftimmis1@businessinsider.com',
        'address': '18 Knutson Circle',
        'city': 'Construction Manager',
        'phone': '251-980-3564',
        'birthdate': '3/23/2007'
      }
    ]
  },
  {
    'id': '58-254-2497',
    'firstName': 'Zaneta',
    'lastName': 'Backen',
    'email': 'zbacken2@nyu.edu',
    'address': '253 Gina Alley',
    'city': 'Construction Worker',
    'phone': '373-791-2266',
    'birthdate': '12/21/2001',
    'children': [
      {
        'id': '40-711-0132',
        'firstName': 'Spike',
        'lastName': 'Pimm',
        'email': 'spimm3@google.es',
        'address': '495 Maple Drive',
        'city': 'Architect',
        'phone': '900-722-5244',
        'birthdate': '5/19/1980'
      },
      {
        'id': '29-389-1887',
        'firstName': 'Clementius',
        'lastName': 'Rebanks',
        'email': 'crebanks4@soundcloud.com',
        'address': '25984 Reinke Trail',
        'city': 'Subcontractor',
        'zip': '62-031',
        'phone': '968-145-9837',
        'birthdate': '9/12/2010'
      },
      {
        'id': '56-949-8817',
        'firstName': 'Carolynn',
        'lastName': 'Petrolli',
        'email': 'cpetrolli5@plala.or.jp',
        'address': '2744 Autumn Leaf Street',
        'city': 'Construction Manager',
        'zip': '999-3503',
        'phone': '367-496-0291',
        'birthdate': '11/21/2005'
      }
    ]
  },
  {
    'id': '39-124-6957',
    'firstName': 'Celeste',
    'lastName': 'Eilhersen',
    'email': 'ceilhersen6@apple.com',
    'address': '359 Marquette Pass',
    'city': 'Construction Expeditor',
    'zip': '416507',
    'phone': '263-279-7789',
    'birthdate': '5/11/1987',
    'secured': true,
    'children': [
      {
        'id': '32-788-3673',
        'firstName': 'Jeri',
        'lastName': 'Bovey',
        'email': 'jbovey8@dagondesign.com',
        'address': '65 Little Fleur Center',
        'city': 'Architect',
        'phone': '624-712-3052',
        'birthdate': '1/31/2022'
      },
      {
        'id': '48-058-4961',
        'firstName': 'Marna',
        'lastName': 'Pavlov',
        'email': 'mpavlov7@bing.com',
        'address': '0399 Comanche Junction',
        'city': 'Construction Expeditor',
        'state': 'North Carolina',
        'zip': '28815',
        'phone': '828-634-9921',
        'birthdate': '2/11/2016'
      }
    ]
  },
  {
    'id': '33-480-5558',
    'firstName': 'Alica',
    'lastName': 'Peyntue',
    'email': 'apeyntue9@smugmug.com',
    'address': '01 Burning Wood Crossing',
    'city': 'Electrician',
    'zip': '7119',
    'phone': '567-335-1756',
    'birthdate': '12/23/2003'
  }
]
