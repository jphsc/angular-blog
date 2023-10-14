import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaCards = [
    {imagem: "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png",
    titulo: "Saiu a nova versão do Angular 1",
    descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati est atque voluptatibus repellendus veritatis recusandae reprehenderit quae eos exercitationem commodi pariatur laborum, consectetur veniam itaque, rerum a dolore cum quaerat?"},
    {imagem: "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png",
    titulo: "Saiu a nova versão do Angular 2",
    descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati est atque voluptatibus repellendus veritatis recusandae reprehenderit quae eos exercitationem commodi pariatur laborum, consectetur veniam itaque, rerum a dolore cum quaerat?"},,
    {imagem: "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png",
    titulo: "Saiu a nova versão do Angular 3",
    descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati est atque voluptatibus repellendus veritatis recusandae reprehenderit quae eos exercitationem commodi pariatur laborum, consectetur veniam itaque, rerum a dolore cum quaerat?"},,
    {imagem: "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png",
    titulo: "Saiu a nova versão do Angular 4",
    descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati est atque voluptatibus repellendus veritatis recusandae reprehenderit quae eos exercitationem commodi pariatur laborum, consectetur veniam itaque, rerum a dolore cum quaerat?"},
  ]
}
