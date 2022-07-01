import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string; //another way apart from background color
  constructor(private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'royalblue', false, false );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white' ,false, false);
  }
  @HostListener('mouseenter') mouseHover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'royalblue' );
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white' );
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

}
