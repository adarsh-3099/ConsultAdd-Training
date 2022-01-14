import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  { path: 'directory', component: DirectoryComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingElements = [ DirectoryComponent, HeaderComponent ]