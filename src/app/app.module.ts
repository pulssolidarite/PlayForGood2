import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListEditionsComponent} from './landing-page/list-editions/list-editions.component';
import {AboutComponent} from './landing-page/about/about.component';
import {FooterComponent} from './landing-page/footer/footer.component';
import {ContactComponent} from './landing-page/contact/contact.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {Edition2Component} from './editions/edition2/edition2.component';
import {Edition1Component} from './editions/edition1/edition1.component';
import { ScrollToTopComponent } from './commons/scroll-to-top/scroll-to-top.component';
import { MenuComponent } from './landing-page/menu/menu.component';
import { MenuRiotComponent } from './editions/edition2/menu-riot/menu-riot.component';
import { AssociationsComponent } from './commons/associations/associations.component';
import { SponsorsComponent } from './commons/sponsors/sponsors.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './commons/login/login.component';
import { SignupComponent } from './commons/signup/signup.component';
import { LiveComponent } from './editions/edition2/live/live.component';
import { DonationComponent } from './editions/edition2/donation/donation.component';
import { LeagueOfLegendsComponent } from './editions/edition2/games/league-of-legends/league-of-legends.component';
import { TeamfightTacticsComponent } from './editions/edition2/games/teamfight-tactics/teamfight-tactics.component';
import { LegendsOfRuneterraComponent } from './editions/edition2/games/legends-of-runeterra/legends-of-runeterra.component';
import { CarouselPfg2Component } from './editions/edition2/carousel-pfg2/carousel-pfg2.component';
import { AboutPfg2Component } from './editions/edition2/about-pfg2/about-pfg2.component';
import { FooterPfg2Component } from './editions/edition2/footer-pfg2/footer-pfg2.component';
import { ProgramPfg2Component } from './editions/edition2/program-pfg2/program-pfg2.component';
import {Router, Scroll} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs/operators';

@NgModule({
    declarations: [
        AppComponent,
        ListEditionsComponent,
        AboutComponent,
        FooterComponent,
        ContactComponent,
        LandingPageComponent,
        Edition2Component,
        Edition1Component,
        ScrollToTopComponent,
        MenuComponent,
        MenuRiotComponent,
        AssociationsComponent,
        SponsorsComponent,
        LoginComponent,
        SignupComponent,
        LiveComponent,
        DonationComponent,
        LeagueOfLegendsComponent,
        TeamfightTacticsComponent,
        LegendsOfRuneterraComponent,
        CarouselPfg2Component,
        AboutPfg2Component,
        FooterPfg2Component,
        ProgramPfg2Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router, viewportScroller: ViewportScroller) {
        router.events.pipe(
            filter((e): e is Scroll => e instanceof Scroll)
        ).subscribe(e => {
            if (e.position) {
                // backward navigation
                viewportScroller.scrollToPosition(e.position);
            } else if (e.anchor) {
                // anchor navigation
                viewportScroller.scrollToAnchor(e.anchor);
            } else {
                // forward navigation
                viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }
}
