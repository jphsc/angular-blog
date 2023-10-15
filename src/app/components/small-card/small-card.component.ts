import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  photoCover: string = "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png";
  cardTitle: string = "Saiu a nova versão do Angular";

}
