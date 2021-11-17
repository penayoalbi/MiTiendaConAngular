import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private element : ElementRef) { }

  @Input()colorbase?: string;

  @Input('appResaltar')resaltarColor?: string;

  @HostListener('mouseenter')OnMouseEnter(){
    this.resaltar(this.resaltarColor || this.colorbase || 'yelow');
    //this.resaltar('yelow')
  }
  @HostListener('mouseLeave')OnMouseLeave(){
    this.resaltar('');
  }

  private resaltar(color: string ):void{
    this.element.nativeElement.style.backgroundColor = color
  }
}
