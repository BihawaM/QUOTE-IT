export class Quote {
    like:number;
    dislike:number;
   showQuote: boolean;
   constructor(public name: string, public quote: string, public completeDate: Date){
       this.showQuote = false;
       this.like = 0;
       this.dislike = 0;
   }
}
