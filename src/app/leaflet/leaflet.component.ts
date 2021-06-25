import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {GeoJsonObject} from 'geojson';
import * as L from 'leaflet';
import {ShapesService} from '../services/shapes.service';
import {LeafletAPI} from './leafletAPI';


@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent extends LeafletAPI implements AfterViewInit {

  @Input()
  states!: GeoJsonObject;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.initStatesLayer(this.states);
  }


}
