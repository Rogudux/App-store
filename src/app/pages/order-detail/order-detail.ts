import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.html',
  styleUrl: './order-detail.scss',
  standalone: false
})
export class OrderDetail {

  id? : string | null;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get("id");

  }
  
}
