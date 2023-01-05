import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Viewer } from 'cesium';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') content: ElementRef | null = null;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const viewer = new Viewer(this.content?.nativeElement);
  }
}
