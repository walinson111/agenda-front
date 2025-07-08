import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../Friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class FriendService {

  private apiUrl = "https://walinson.duckdns.org/friends"; 

  constructor(private http: HttpClient) {}

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.apiUrl}/friends`);
  }

  saveFriend(friend: Friend): Observable<Friend> {
    return this.http.post<Friend>(this.apiUrl, friend);
  }

  updateFriend(friend: Friend): Observable<Friend> {
    return this.http.put<Friend>(`${this.apiUrl}/${friend.id}`, friend);
  }

  deleteFriend(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
