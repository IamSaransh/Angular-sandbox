import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
   //srcElement is alias in app.componenets.html we use  [srvElement]="serverElement" instead of  [element]="serverElement"

  constructor() {

  }

  ngOnInit(): void {
  }

}
