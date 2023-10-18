import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  @Input()
  id: string | null = "0";

  @Input()
  photoCover: string = "https://escolasempre.com.br/wp-content/uploads/2023/03/placeholder.png";

  @Input()
  contentTitle: string = "teste";

  @Input()
  descriptionContent: string = "teste";

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value  => this.id = value.get("id"))

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.photoCover = result.photo;
    this.descriptionContent = result.description;
    this.contentTitle = result.title;
  }
}
