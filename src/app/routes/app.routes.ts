import { PageoneComponent } from '../components/pageone/pageone.component';
import { PagetwoComponent } from '../components/pagetwo/pagetwo.component';
import { PagethreeComponent } from '../components/pagethree/pagethree.component';
import { Routes } from '@angular/router';
import { ChildoneComponent } from '../components/childone/childone.component';
import { ChildtwoComponent } from '../components/childtwo/childtwo.component';
import { ChildthreeComponent } from '../components/childthree/childthree.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PageoneComponent,
    children: [{ path: 'child_one', component: ChildoneComponent }]
  },
  {
    path: 'page_two/:e_id/:e_name/:e_sal',
    component: PagetwoComponent,
    children: [{ path: 'child_two', component: ChildtwoComponent }]
  },
  {
    path: 'page_three/:e_id/:e_name/:e_sal',
    component: PagethreeComponent,
    children: [{ path: 'child_three', component: ChildthreeComponent }]
  }
];
