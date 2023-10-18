import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  ngOnInit(): void {
    this.id = dataFake[0].id;
    this.photoCover = dataFake[0].photo;
    this.cardTitle = dataFake[0].title;
    this.cardDescription = dataFake[0].description;
  }

  @Input()
  id:string = "";
  photoCover: string = "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png";
  cardTitle: string = "Saiu a nova versão do Angular";
  cardDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ad dignissimos, reiciendis modi voluptatem qui nulla autem porro velit vero unde similique! Ratione dolor recusandae excepturi. Odio, ipsum explicabo.";



}
