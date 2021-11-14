import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private element : ElementRef) { }

  @Input()colorbase!: string;

  @Input('appResaltar')resaltarColor!: string;

  @HostListener('mouseenter')OnMouseEnter(){
    this.resaltar(this.resaltarColor || this.colorbase || 'red');
  }
  @HostListener('mouseLeave')OnMouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color: string|any):void{
    this.element.nativeElement.style.backgroundColor = color;

  }
}
