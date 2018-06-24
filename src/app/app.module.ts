import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ItemFormComponent } from './item-form/item-form.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SwapiDataService} from './swapi-data.service';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharsComponent } from './chars/chars.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ItemFormComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CharsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SwapiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
