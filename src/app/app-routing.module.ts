import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  // {path: 'nomeRota', component: NomeComponent}
  {path: '', component: HomeComponent},
  // /:id informa que ao chamar esse caminho passando o id, será repassada essa informação ao back
  {path: 'content/:id', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
