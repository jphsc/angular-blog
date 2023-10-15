import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png";
  cardTitle: string = "Saiu a nova versão do Angular";
  @Input()
  cardDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ad dignissimos, reiciendis modi voluptatem qui nulla autem porro velit vero unde similique! Ratione dolor recusandae excepturi. Odio, ipsum explicabo.";

}
