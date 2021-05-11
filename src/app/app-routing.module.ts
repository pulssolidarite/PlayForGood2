import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {Edition1Component} from './editions/edition1/edition1.component';
import {Edition2Component} from './editions/edition2/edition2.component';
import {LoginComponent} from './commons/login/login.component';
import {SignupComponent} from './commons/signup/signup.component';
import {AboutPfg2Component} from './editions/edition2/about-pfg2/about-pfg2.component';
import {DonationComponent} from './editions/edition2/donation/donation.component';
import {LeagueOfLegendsComponent} from './editions/edition2/games/league-of-legends/league-of-legends.component';
import {TeamfightTacticsComponent} from './editions/edition2/games/teamfight-tactics/teamfight-tactics.component';
import {LegendsOfRuneterraComponent} from './editions/edition2/games/legends-of-runeterra/legends-of-runeterra.component';
import {ProgramPfg2Component} from './editions/edition2/program-pfg2/program-pfg2.component';

const routes: Routes = [
    {path: '', component: LandingPageComponent}, // Route de base pour la landing page
    {path: 'edition-flappy', component: Edition1Component}, // Route pour edition de flappy bird
    {path: 'login', component: LoginComponent}, // Route pour la connexion
    {path: 'signup', component: SignupComponent}, // Route pour l'inscription
    {path: 'edition-riot', component: Edition2Component}, // Route pour edition Riot
    {path: 'edition-riot/about', component: AboutPfg2Component}, // Route pour le manifeste de PFG2
    {path: 'edition-riot/donation', component: DonationComponent}, // Route pour les donations de PFG2
    {path: 'edition-riot/league-of-legends', component: LeagueOfLegendsComponent}, // Route pour la page du tournoi de lol
    {path: 'edition-riot/teamfight-tactics', component: TeamfightTacticsComponent}, // Route pour la page du tournoi de tft
    {path: 'edition-riot/legends-of-runeterra', component: LegendsOfRuneterraComponent}, // Route pour la page du tournoi de lor
    {path: 'edition-riot/program', component: ProgramPfg2Component}, // Route pour la page du programme de l'édition 2
    {path: '**', redirectTo: ''} // Si mauvaise url redirige sur landing
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
