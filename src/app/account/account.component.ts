import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging/logging-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
     private accountService: AccountService){
      
     }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status);
  }
}
