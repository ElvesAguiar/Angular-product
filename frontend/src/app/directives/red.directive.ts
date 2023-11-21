import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core'

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b' }

}
