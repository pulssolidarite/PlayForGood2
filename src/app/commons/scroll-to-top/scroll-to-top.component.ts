import {Component, HostListener, OnInit} from '@angular/core';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
    faArrowAltCircleUp = faArrowAltCircleUp;
    isShow = false;
    topPosToStartShowing = 50;

    constructor() {
    }

    @HostListener('window:scroll')
    checkScroll(): void {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        this.isShow = scrollPosition >= this.topPosToStartShowing;
    }

    gotoTop(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit(): void {
    }
}
