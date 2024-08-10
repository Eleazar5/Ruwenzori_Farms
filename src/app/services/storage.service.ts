import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  enctypykey:any = "secretKey";
  constructor() { }

  encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.enctypykey).toString();
  }
  
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.enctypykey).toString(CryptoJS.enc.Utf8);
  }

  storeItem(itemlabel: string, itemValue: string) {
    localStorage.setItem(itemlabel, this.encrypt(itemValue));
  }

  getData(key: string) {
    let userdata = localStorage.getItem(key) || "";
    return this.decrypt(userdata);
  }

  getJsonData(key: string) {
    let encryptedData = localStorage.getItem(key) || "";
    const decryptedData = this.decrypt(encryptedData);
    return JSON.parse(decryptedData);
  }

  removeItem(itemlabel: string) {
    localStorage.removeItem(itemlabel);
  }

  clearData() {
    localStorage.clear();
  }
}
