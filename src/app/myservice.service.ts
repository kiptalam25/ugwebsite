import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  constructor(private http:HttpClient) { }

  baseApiUrl = "https://file.io"
  
  // upload(file:File|null):Observable<any> {
  
  //   // Create form data
  //   const formData = new FormData(); 
      
  //   // Store form name as "file" with file data
  //   formData.append("file", file, file?.name);
      
  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.baseApiUrl, formData)
// }
 
public getFiles():Observable<any>{
  return this.http.get<any>('http://localhost:8080/files');
}


}
