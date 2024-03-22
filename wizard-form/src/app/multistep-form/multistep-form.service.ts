import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {DefaultService as ApiService} from "../api/api/default.service"

@Injectable({
  providedIn: 'root'
})
export class MultistepFormService {

  apiService = inject(ApiService)

  constructor(private http: HttpClient) { }

  sendBackendRequest(finalFormData: any) {

    const apiUrl = `${environment.apiUrl}`

    // Send the data to the server
    this.http.post(apiUrl, finalFormData).subscribe({
      next: (response) => {
        console.log('Form data successfully submitted:', response);
        // Handle successful response here
        this.apiService.listPartners().subscribe({
          next: (data) => {
            console.log('apiService.listPartners(): ', data)
          },
          error: (e) => {
            console.log("apiService.listPartners() failed due to ", e)
          }
        })
      },
      error: (error) => {
        console.error('Error submitting form data:', error);
        // Handle errors here, for example, show user feedback

      }
    });

  }

}
