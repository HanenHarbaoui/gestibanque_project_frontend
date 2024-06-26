import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private Http: HttpClient) { }

  createBanque(banque: any) {
    //console.log("OK");
    /*for (const [key, value] of banque.entries()) {
      console.log(key, value);
    }*/
   // const headers = new HttpHeaders();
   // headers.append('Content-Type', 'multipart/form-data');
    return this.Http.post(environment.baseUrl + "banques", banque);
  }

  getAllBanques() {
    return this.Http.get(environment.baseUrl + "banques");
  }

  deleteBanque(idBanque: any) {
    return this.Http.delete(environment.baseUrl + "banques/" + idBanque)
  }
}
