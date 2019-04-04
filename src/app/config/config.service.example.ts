import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = 'http://www.theapiurl.com/';
  apiKey = 'secret';

  constructor() { }
}
