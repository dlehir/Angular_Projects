import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[HighLight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  @HostListener('mouseenter') mouseEnterEvent (evenData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseLeaveEvent (evenData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }

};
