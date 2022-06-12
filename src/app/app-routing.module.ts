import { NgModule } from '@angular/core';
import {
    AngularFireAuthGuard,
    redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SigninComponent } from './signin/signin.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        // canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },

    {
        path: 'products/:id',
        component: ProductListComponent,
        // canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },

    {
        path: 'login',
        component: SigninComponent
    },

    {
        path: 'history',
        component: HistoryComponent,
        // canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },

    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],

    exports: [RouterModule]
})
export class AppRoutingModule { }
