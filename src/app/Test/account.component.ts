// Angular 8.x​​​​​​‌​​‌​‌​‌​​​‌​‌‌‌​‌​​‌‌​​‌ code
import { Component, NgModule } from '@angular/core';
import { AccountingService } from '../services/accounting.service';


// Implement the component here
@Component({
  selector:'account-component',
  template: `
        <input type="text" id="createAccountInput" [(ngModel)]="createAccountInput"> <br>
        <button id="createAccountButton" (click)="createAccount()">Create Account</button><br>
        <input type="text" id="topupAccountId" [(ngModel)]="topupAccountId"><br>
        <input type="text" id="topupAccountAmount" [(ngModel)]="topupAccountAmount"><br>
        <button id="topupAccountButton" (click)="topupAccount()">Top Up Account</button>
        <div id="message">{{message}}</div>
  `,
})
export class AccountComponent {
    message: string = '';
    createAccountInput: string | null;
    topupAccountId: string | null;
    topupAccountAmount: number | null;
  constructor(private accountingService: AccountingService){
  }

  createAccount() {
      this.accountingService.createAccount(this.createAccountInput).then(() => {
          console.log('Success Operation');
      }).catch(errors => {
          this.message = errors.message;
      })
  }

  topupAccount() {
      this.accountingService.topUp(this.topupAccountId, this.topupAccountAmount).then(() => {
          console.log('Success Operation');
      }).catch(errors => {
          this.message= errors;
      })
  }
}
