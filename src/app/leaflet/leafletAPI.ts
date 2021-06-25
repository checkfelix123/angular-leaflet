import {GeoJsonObject} from 'geojson';
import * as L from 'leaflet';
import {GeoJSON} from 'leaflet';
import {Directive} from '@angular/core';

export abstract class LeafletAPI {
  private map: any;

  constructor() {
  }


  protected initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }

  protected initStatesLayer(states: GeoJsonObject | undefined): void {
    const stateLayer = L.geoJSON(states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      })
    });
    this.map.addLayer(stateLayer);
  }
}
