import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('appHoverAffect') hoverAffect: string = '';

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverAffect === 'underline') {
      this.elm.nativeElement.style.textDecoration = this.hoverAffect;
    } else if (this.hoverAffect === 'bold') {
      this.elm.nativeElement.style.fontWeight = this.hoverAffect;
    } else if (this.hoverAffect === 'border') {
      this.elm.nativeElement.classList.add('hoverBorder');
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.hoverAffect === 'underline') {
      this.elm.nativeElement.style.textDecoration = 'none';
    } else if (this.hoverAffect === 'bold') {
      this.elm.nativeElement.style.fontWeight = 'normal';
    } else if (this.hoverAffect === 'border') {
      this.elm.nativeElement.classList.remove('hoverBorder');
    }
  }

}
