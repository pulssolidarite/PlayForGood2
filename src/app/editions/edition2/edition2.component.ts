import {Component, OnInit} from '@angular/core';
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-edition2',
    templateUrl: './edition2.component.html',
    styleUrls: ['./edition2.component.css']
})
export class Edition2Component implements OnInit {
    faFacebook = faFacebookSquare;
    faTwitter = faTwitterSquare;
    faInstagram = faInstagramSquare;
    faLinkedin = faLinkedin;

    constructor() {
    }

    ngOnInit(): void {
    }

}
