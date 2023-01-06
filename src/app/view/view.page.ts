import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Viewer } from 'cesium';
import { CesiumService } from './../cesium.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') content: ElementRef | null = null;

  constructor(private cesiumService: CesiumService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const viewer = new Viewer(this.content?.nativeElement);
    this.cesiumService.register(viewer);
    this.cesiumService.addPhotos();
  }
}
