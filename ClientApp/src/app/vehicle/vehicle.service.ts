import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class VehicleService {
  private baseUrl;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getMakes() {
    return this.http.get(`${this.baseUrl}api/makes`);
  }

  getFeatures() {
    return this.http.get(`${this.baseUrl}api/features`);
  }
}
