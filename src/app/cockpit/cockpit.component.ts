import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter< {serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter< {serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerNameInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }
  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
