import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.initEffect();
  }

  initEffect = () => {
    const titleElement = this.asTitle.nativeElement;
    const writer = new Typewriter(titleElement, {
      loop: true,
      typeColor: 'white'
    })
    
    writer
      .changeCursorColor('white')
      .type('Miguel Salas')
      .rest(5000)
      .start()
  }

}
