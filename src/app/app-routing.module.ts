import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListKittenComponent } from './list-kitten/list-kitten.component';


const routes: Routes = [
  { path: '', component: ListKittenComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
  [RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
