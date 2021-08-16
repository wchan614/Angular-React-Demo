import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from './card.model';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styles: [ ".card{ }" ]
  })
export class CardComponent implements OnInit {
    // technically these should probably be in some sort of model
    @Input()
    model!: CardModel;

    constructor(/*title:string, text:string, btnEmail:string*/) { 
        /*
        this.title = title;
        this.text = text;
        this.btnEmail = btnEmail;
        */
    }
  
    ngOnInit(): void {
    }

}
  