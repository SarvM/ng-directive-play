import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HiglightDirective } from './highlight/higlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HiglightDirective, UnlessDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
