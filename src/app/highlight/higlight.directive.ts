import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  @Input('appHiglight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    //this.el.nativeElement.style.backgroundColor = 'yellow';
    //this.highlight('yellow');
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this.el.nativeElement.style.backgroundColor = 'red';
    //this.highlight('red');
  }

  constructor(private el: ElementRef) { 
    //el.nativeElement.style.backgroundColor = 'green';
    //this.highlight('green');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}