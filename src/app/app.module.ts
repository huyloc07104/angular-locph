import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlidehomeComponent } from './slidehome/slidehome.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SlidehomeComponent, ListproductComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
