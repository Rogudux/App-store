import { Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { ShopService } from '../../core/services/shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: false,
})


export class ShopComponent implements OnInit{

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  markers: mapboxgl.Marker[] = [];

  constructor(private shopService:ShopService){}

  ngOnInit(): void {
    console.log("Iniciand Componente")
    
    console.log(`El token de mapbox viene de ${environment.MAPBOX_TOKEN}`)
    this.map = new mapboxgl.Map({
      accessToken : environment.MAPBOX_TOKEN,
      style: this.style,
      container: "map",
      center: [-101.684168, 21.121628],
      zoom: 15
    })

    this.shopService.getAllStores().subscribe((storeResponse)=>{
      console.log(storeResponse)
      storeResponse.forEach((store)=>{
        const marker = new mapboxgl.Marker()
        .setLngLat([store.longitude,store.latitude])
        .addTo(this.map);
        this.markers.push(marker)
      });
    });
  }


}
