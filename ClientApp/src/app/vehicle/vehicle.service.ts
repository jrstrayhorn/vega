import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Make, Feature } from "../data-model";

@Injectable({
  providedIn: "root"
})
export class VehicleService {
  private baseUrl;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getMakes() {
    return this.http.get<Make[]>(`${this.baseUrl}api/makes`);
  }

  getFeatures() {
    return this.http.get<Feature[]>(`${this.baseUrl}api/features`);
  }
}
