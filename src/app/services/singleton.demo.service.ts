import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonDemoService {

  private username: string;            // 用戶信息

  constructor() { }

  // 獲取 用戶信息
  getUserName() {
    return this.username;
  }

  // 緩存 用戶信息
  setUserName(username: string) {
    if (!this.username) {
      this.username = username;
    }
  }

}
