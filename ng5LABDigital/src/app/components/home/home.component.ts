import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup: FormGroup;
  post: any;
  fullName: string;
  emailAddress: string;
  contactNumber: string;
  description: string;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      'fullName': [null, Validators.required],
      'emailAddress': [null, Validators.required],
      'contactNumber': [null, Validators.required],
      'description': [null, Validators.required]
    });

   }

  ngOnInit() {
    jQuery('.owl-carousel').owlCarousel();
  }

  postDetails(post) {
    let stop = 'here';
  }

}
