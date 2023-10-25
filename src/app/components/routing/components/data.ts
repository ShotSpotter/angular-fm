export interface FoodNode {
  name: string;
  children?: FoodNode[];
}

export const TREE_DATA: FoodNode[] = [{
  name: 'Safety Smart',
  children: [
    {
      name: 'Green',
      children: [
        {name: 'Broccoli'},
        {name: 'Brussels sprouts'},
      ]
    }, {
      name: 'Orange',
      children: [
        {name: 'Pumpkins'},
        {name: 'Carrots'},
      ]
    },
  ]
}];
