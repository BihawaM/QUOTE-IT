export class Quote {
   showQuote: boolean;
   constructor(public name: string, public quote: string, public completeDate:  Date){
       this.showQuote = false;
   }
}
