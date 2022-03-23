import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/product/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-new',
    loadChildren: () => import('./pages/product/product-new/product-new.module').then( m => m.ProductNewPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./pages/product/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'pdv',
    loadChildren: () => import('./pages/pdv/pdv.module').then( m => m.PdvPageModule)
  },
  {
    path: 'finish-note',
    loadChildren: () => import('./pages/pdv/finish-note/finish-note.module').then( m => m.FinishNotePageModule)
  },
  {
    path: 'estoque',
    loadChildren: () => import('./pages/estoque/estoque.module').then( m => m.EstoquePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
