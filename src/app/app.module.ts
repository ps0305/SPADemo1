import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';
import { appRoutes } from './routes/app.routes';
import { RouterModule } from '@angular/router';
import { ChildoneComponent } from './components/childone/childone.component';
import { ChildtwoComponent } from './components/childtwo/childtwo.component';
import { ChildthreeComponent } from './components/childthree/childthree.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule {}
