import {Component, OnInit} from '@angular/core';
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn, faTwitch, faDiscord} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
