export class CardModel{
    title:string;
    text:string;
    btnEmail:string;
  
    constructor(title:string, text:string, btnEmail:string) {
      this.title = title;
      this.text = text;
      this.btnEmail = btnEmail;
    };
}


//    poge <- for loop <- backend of page saved with bunch of Components this is not good b/c loading 
// components dynamically while page is already pushed out to client doesnt make sense

// page <- for loop <- bunch of js objects <- 

