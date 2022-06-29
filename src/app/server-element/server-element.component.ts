import { Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //, encapsulation: ViewEncapsulation.None  -- > this will disqable encapsulation for this component and 
  // these styles will now be applied appliction wide!()
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
   //srcElement is alias in app.componenets.html we use  [srvElement]="serverElement" instead of  [element]="serverElement"
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
    console.log("this paragraph @COntentChiled value " + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log("this paragraph @COntentChiled value " + this.paragraph.nativeElement.textContent);
  }

}
