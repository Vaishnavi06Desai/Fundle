import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-template/form-base';
import { FormControlServiceService } from '../form-template/form-control-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() questions: FormBase<string>[] | null = [];
  @Output() onSubmitEmit: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: FormControlServiceService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions as FormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.onSubmitEmit.emit(this.form.value);
  }

}
