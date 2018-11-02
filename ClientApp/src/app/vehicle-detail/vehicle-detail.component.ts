import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.css"]
})
export class VehicleDetailComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group({
      //make: '',
      //model: '',
      isRegistered: "",
      //features: '',
      contactName: "",
      contactPhone: "",
      contactEmail: ""
    });
  }

  ngOnInit() {}
}
