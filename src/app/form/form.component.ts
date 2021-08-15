import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-template/form-base';
import { FormControlServiceService } from '../form-template/form-control-service.service';
import { FormBusService } from '../services/form-bus.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() questions: FormBase<string>[] | null = [];
  @Input() value: number;
  @Input() name: string;
  @Output() onSubmitEmit: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: FormControlServiceService, private fb: FormBusService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions as FormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.fb.onSubmit(1, this.form.value);
  }

}
