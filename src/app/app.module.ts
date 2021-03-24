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
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { LoginComponent } from './commons/login/login.component';
import { SignupComponent } from './commons/signup/signup.component';

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
        CarouselComponent,
        LoginComponent,
        SignupComponent,
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
}
