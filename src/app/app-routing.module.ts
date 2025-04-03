import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComplement } from './character-list/character-list.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  { path: '', component: CharacterListComplement },

  { path: 'filter', component: CharacterFilterComponent },
  { path: ':id', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
