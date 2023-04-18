import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FeedbackModel } from 'src/app/contact/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formValue !: FormGroup;
  feedbackModelObj : FeedbackModel = new FeedbackModel();
  feedbackData !: any;

  constructor(private formBuilder: FormBuilder, private api: ContactService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name : [''],
      email : [''],
      msg : ['']
     
    })
    this.getAllFeedbacks();
  }
  postFeedbackDetails(){
    this.feedbackModelObj.name = this.formValue.value.name;
    this.feedbackModelObj.email = this.formValue.value.email;
    this.feedbackModelObj.msg = this.formValue.value.msg;

    this.api.postFeedback(this.feedbackModelObj)
    .subscribe(res => {
      console.log(res);
      alert("ThankYou For Your Feedback!");
      this.formValue.reset();
    },
    err => {
      alert("Something went wrong.");
    })
  }

  getAllFeedbacks(){
    this.api.getFeedback()
    .subscribe(res => {
      this.feedbackData = res;
    })
  }
}
