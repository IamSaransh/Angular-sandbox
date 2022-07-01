import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class  BaicHighLightDirective implements OnInit{
    constructor( private elementRef: ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'cyan';
    }
}