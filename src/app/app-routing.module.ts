import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'about',
		redirectTo: '/about',
		pathMatch: 'full'
	},
	{
		path: 'photos',
		redirectTo: '/photos',
		pathMatch: 'full'
	},
	{
		path: 'shows',
		redirectTo: '/shows',
		pathMatch: 'full'
	},
	{
		path: 'contact',
		redirectTo: '/contact',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
