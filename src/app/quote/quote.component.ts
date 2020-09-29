import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  quote:Quote [] = [
    new Quote('Mary Anne Roadacher-Hershey',"Live with intention. Walk to the edge. Listen hard. Practice wellness. Play with abandon. Laugh. Choose with no regret. Do what you love. Live as if this is all there is.", new Date(2019,3,14)),
    new Quote('Buddha', "The secret of health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles, but to live in the present moment wisely and earnestly.", new Date(2020,7,7)),
    new Quote('Dan Millman',"Money is neither my god nor my devil. It is a form of energy that tends to make us more of who we already are, whether it's greedy or loving.",new Date(2016,6,4) ),
    new Quote('Hajj',"Be crazy, be stupid, be silly, be weird. Be whatever, because life is too short to be anything but happy.", new Date(2019,1,21)),
    new Quote('Rehema',"Dear Math, please grow up and solve your own problems, I'm tired of solving them for you.", new Date(2018,10,3)),
    new Quote('Dalai Lama',"Happiness mainly comes from our own attitude, rather than from external factors.", new Date(2020,9,28)),
  ];

  like(index) {
    this.quote[index].like++;
  }
  dislike(index) {
    this.quote[index].dislike++;
  }

  toggleDetails(index){
    this.quote[index].showQuote =!this.quote[index].showQuote;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    
    }
  }

  addNewQuote(quote){
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  
  

  constructor() { }

  ngOnInit(){
  }

}
