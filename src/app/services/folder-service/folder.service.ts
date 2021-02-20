import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Folder from 'src/app/models/Folder.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http: HttpClient) { }

  save(obj: Folder) : Observable<Folder>{
    return this.http.post<Folder>('http://localhost:8080/api/folders', obj).pipe();
  }

  getFoldersMain(): Observable<Folder[]>{
    return this.http.get<Folder[]>('http://localhost:8080/api/folders').pipe();
  }
}
