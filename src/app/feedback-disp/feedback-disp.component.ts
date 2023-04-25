import { Component } from '@angular/core';
import { feed } from '../data-type';
import  feeds  from '../../../db.json';
const data = feeds.feedback;


@Component({
  selector: 'app-feedback-disp',
  templateUrl: './feedback-disp.component.html',
  styleUrls: ['./feedback-disp.component.css']
})
export class FeedbackDispComponent {

  feed:feed[] = data;

  constructor(){
    console.log(this.feed);
  };

}
