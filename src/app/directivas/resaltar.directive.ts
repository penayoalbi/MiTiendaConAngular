import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private element : ElementRef) { }

  @Input()colorBase!: string;

  @Input('appResaltar')resaltarColor!:string;

  @HostListener('mouseenter')onMouseEnter(){
    this.resaltar(this.resaltarColor || this.colorBase || '#FCECC0');
    //this.resaltar('yelow')
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.resaltar('');
  }

  private resaltar(color: string ):void{
    this.element.nativeElement.style.backgroundColor = color;
  }
}
