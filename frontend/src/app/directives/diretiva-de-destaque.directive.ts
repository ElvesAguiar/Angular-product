import { Directive, Renderer2, ElementRef,HostListener   } from '@angular/core';

@Directive({
  selector: '[appDiretivaDeDestaque]'
})
export class DiretivaDeDestaqueDirective {
  @HostListener ('mouseenter') onMouseEnter (){
    //this.destaque('yellow');
  }

  @HostListener('mouseLeave') onMouseLeave(){
    
  }

  constructor(private el: ElementRef, private renderer : Renderer2) {

   }

}
