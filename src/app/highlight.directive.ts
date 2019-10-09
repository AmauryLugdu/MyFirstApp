import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}

  ngOnInit() {
    
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) { 
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '50px');}
   
  

    @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '15px')
    }
    
}


