import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  id: string = "";
  photoCover: string = "";
  cardTitle: string = "";
  description: string = "";

  ngOnInit(): void {
    dataFake.map(item => {
      this.id = item.id;
      this.photoCover = item.photo;
      this.cardTitle = item.title;
      this.description = item.description
    })
  }

}
