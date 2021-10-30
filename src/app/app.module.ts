import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './Test/account.component';
import { AccountingService } from './services/accounting.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AccountComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AccountingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
