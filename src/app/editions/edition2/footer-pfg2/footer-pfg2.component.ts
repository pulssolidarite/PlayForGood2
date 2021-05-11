import {Component, OnInit} from '@angular/core';
import {faFacebookF, faInstagram, faTwitter, faTwitch, faLinkedinIn, faDiscord} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer-pfg2',
    templateUrl: './footer-pfg2.component.html',
    styleUrls: ['./footer-pfg2.component.css']
})
export class FooterPfg2Component implements OnInit {
    faFacebook = faFacebookF;
    faTwitter = faTwitter;
    faInstagram = faInstagram;
    faLinkedin = faLinkedinIn;
    faTwitch = faTwitch;
    faDiscord = faDiscord;

    constructor() {
    }

    ngOnInit(): void {
    }

}
