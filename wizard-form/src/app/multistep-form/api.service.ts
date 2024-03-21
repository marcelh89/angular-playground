import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendBackendRequest(finalFormData: any) {

    const apiUrl = `${environment.apiUrl}`

    // Send the data to the server
    this.http.post(apiUrl, finalFormData).subscribe({
      next: (response) => {
        console.log('Form data successfully submitted:', response);
        // Handle successful response here
      },
      error: (error) => {
        console.error('Error submitting form data:', error);
        // Handle errors here, for example, show user feedback
      }
    });

  }

}
