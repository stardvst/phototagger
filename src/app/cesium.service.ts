import { Injectable } from '@angular/core';
import { Cartesian3, Color, PinBuilder, Viewer } from 'cesium';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root',
})
export class CesiumService {
  private viewer: Viewer | null = null;

  constructor(private firestore: AngularFirestore) {}

  register(viewer: Viewer) {
    this.viewer = viewer;
  }

  addPhotos() {
    const pinBuilder = new PinBuilder();

    this.getPhotos().subscribe(photos => {
      photos.forEach(photo => {
        const entity = {
          position: Cartesian3.fromDegrees(photo.lng, photo.lat),
          billboard: {
            image: pinBuilder.fromColor(Color.fromCssColorString('#de6b45'), 48).toDataURL(),
          },
          description: `<img width="100%" style="margin: auto;  display: block;" src="${photo.url}" />`,
        };
        this.viewer?.entities.add(entity);
      });
    });
  }

  private getPhotos(): Observable<Photo[]> {
    return this.firestore
      .collection<Photo>('photos')
      .snapshotChanges()
      .pipe(map(actions => actions.map(a => a.payload.doc.data() as Photo)));
  }
}
