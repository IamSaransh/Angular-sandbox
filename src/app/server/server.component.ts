import { Component } from "@angular/core";
@Component({
    selector: 'app-server', //this should be unique usuallu prefixed with app
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverID: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }

}