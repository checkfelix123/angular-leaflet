import {Component, OnInit} from '@angular/core';
import {ShapesService} from './services/shapes.service';
import {GeoJsonObject} from 'geojson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-leaflet';
  states?: GeoJsonObject;

  constructor(private shapes: ShapesService) {
  }

  ngOnInit(): void {
    this.shapes.getShape().subscribe(states => {
      this.states = states;
    });
  }

}
