import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage: ', error);
    }
  }

  get(key: string): any {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }

      throw new Error('Null data retrieved from localStorage');
    } catch (error) {
      console.log('Error retrieving from localStorage', error);
      return null;
    }
  }
}
