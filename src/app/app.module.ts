import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditCradMachineTestDirective } from './shared/directive/credit-crad-machine-test.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCradMachineTestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
