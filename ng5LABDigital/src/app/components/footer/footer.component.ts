import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      nav: true,
      navText: ["<span class='icon icon-arrow-left7'></span>", "<span class='icon icon-arrow-right7'></span>"],
      items: 1,
      responsive: {
        0: {
          items: 0
        },
        479: {
          items: 1
        },
        768: {
          items: 2
        },
        979: {
          items: 3
        },
        1199: {
          items: 6
        }
      }
    });
  }
}
