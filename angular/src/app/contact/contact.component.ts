import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card.component';
import { CardModel } from "./card.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  layout:Array<Array<CardModel>> = 
    [[new CardModel("Get Support","Something is not working for you? Please check our Help Centre first. If your question isn’t answered there, do not hesitate to contact us.","support@cloud.storage"),
      new CardModel("Copyright","We take intellectual property rights seriously and enforce a robust takedown/repeat infringer policy. For more information read our Takedown Guidance Policy. You can submit a takedown notice through our online form or send us an email.","copyright@cloud.storage"),
      new CardModel("Report Objectionable Material","We have a zero tolerance for  Child Exploitation Material, Violent Extremism, Bestiality, Zoophilia, Gore, Malware, Hacked/Stolen Data/Passwords, Extortion, Revenge Porn etc. Report links with description to:","abuse@cloud.storage")],
      [new CardModel("Privacy","Enquiries and requests relating to our Privacy & Data Policy should be sent to:","privacy@cloud.storage"),
      new CardModel("Report a bug","Our company was made by humans and is therefore not perfect. If you run into a bug, we would appreciate hearing about it so that we can fix it - the more details you can provide, the better.","bug@cloud.storage"),
      new CardModel("Security","Please contact us about any security issue that you may have encountered. We have a vulnerability rewards program and pays for responsible disclosure.","security@cloud.storage")],
      [
        new CardModel("Legal","Our legal department is standing by to respond to your enquiry.","Legal@cloud.storage"),
        new CardModel("Media","We welcome members of the media, including bloggers, to contact us with inquiries related to our company.","media@cloud.storage"),
        new CardModel("Other Intellectual Property Issues","Submit full details of alleged Trademark infringement to:","takedown@cloud.storage")
      ]
    
    ]
/* 
  mapping = [[a,b,c], [d,e,f], [g,h,i]]; */

}
