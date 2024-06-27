import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createArticle(title: string, content: string): Observable<any> {
    return this.http.post(this.apiUrl, { title, content });
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateArticle(id: string, title: string, content: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { title, content });
  }

  
  getUserIdFromToken(): string {
    const token = localStorage.getItem('token');
    if (!token) {
      return "null";
    }

    try {
      const decodedToken = jwtDecode<any>(token);
      
      // Check if the token is expired
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // Token is expired
        localStorage.removeItem('jwt_token');
        return "null";
      }

      return decodedToken.userId;
    } catch (error) {
      console.error('Error decoding token', error);
      return "null";
    }
  }
}