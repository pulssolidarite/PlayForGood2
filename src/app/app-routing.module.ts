import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {Edition1Component} from './editions/edition1/edition1.component';
import {Edition2Component} from './editions/edition2/edition2.component';
import {LoginComponent} from './commons/login/login.component';
import {SignupComponent} from './commons/signup/signup.component';

const routes: Routes = [
    {path: '', component: LandingPageComponent}, // Route de base pour la landing page
    {path: 'edition-flappy', component: Edition1Component}, // Route pour edition de flappy bird
    {path: 'edition-riot', component: Edition2Component}, // Route pour edition Riot
    {path: 'login', component: LoginComponent}, // Route pour la connexion
    {path: 'signup', component: SignupComponent}, // Route pour l'inscription
    {path: '**', redirectTo: ''} // Si mauvaise url redirige sur landing
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
