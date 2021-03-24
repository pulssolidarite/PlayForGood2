import {Component, OnInit} from '@angular/core';
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    faFacebook = faFacebookSquare;
    faTwitter = faTwitterSquare;
    faInstagram = faInstagramSquare;
    faLinkedin = faLinkedin;

    constructor() {
    }

    ngOnInit(): void {
    }

}
