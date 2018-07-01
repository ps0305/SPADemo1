import { PageoneComponent } from '../components/pageone/pageone.component';
import { PagetwoComponent } from '../components/pagetwo/pagetwo.component';
import { PagethreeComponent } from '../components/pagethree/pagethree.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'page_two', component: PagetwoComponent },
  { path: 'page_three', component: PagethreeComponent }
];
