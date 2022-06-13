import { Component } from "@angular/core";
import { reduce } from "rxjs";

@Component({
    selector: 'app-server', //this should be unique usuallu prefixed with app
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white
        }
    `]
})
export class ServerComponent{
    serverID: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5  ? 'offline': 'online';
    }
    getServerStatus(){
        return this.serverStatus;
    }

    
  getColor(){
    if(this.serverStatus == 'offline')
        return 'red';
    else return 'green';
  }

}