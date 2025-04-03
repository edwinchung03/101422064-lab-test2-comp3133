import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HarryPotterService {
  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(): any {
    return this.http.get(`${this.baseUrl}/characters`);
  }

  getCharacterByHouse(house: string): any {
    return this.http.get(`${this.baseUrl}/characters/house/${house}`);
  }

  getCharacterById(characterId: any): any {
    return this.http.get(`${this.baseUrl}/character/${characterId}`);
  }
}
