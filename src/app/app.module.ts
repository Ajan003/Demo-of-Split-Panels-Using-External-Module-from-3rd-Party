import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule, SplitPaneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
