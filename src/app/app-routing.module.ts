import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharsResolver } from './charsResolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CharsComponent} from './chars/chars.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'chars',
    pathMatch: 'full'
  },
  {
    path: 'chars',
    component: CharsComponent,
    resolve: {
      chars: CharsResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CharsResolver
  ]
})
export class AppRoutingModule {
}
