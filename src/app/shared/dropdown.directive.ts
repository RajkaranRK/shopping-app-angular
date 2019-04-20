import { Directive, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private elRef: ElementRef) {

    }

    ngOnInit() {
    }

    @HostListener('click') toggelOpen(){
        this.isOpen = !this.isOpen;
    }
} 