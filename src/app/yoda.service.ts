import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YodaService {

  constructor( private http : Http ) { }

  fetchData( uri : string) {
    return this.http.get(`https://api.funtranslations.com/translate/pirate.json?text=${uri}`)
      .map((res:Response) => res.json());
    }

}
