import { Injectable } from '@angular/core';
import { Constants } from '../../config/app.config';
import { TranslateService } from '@ngx-translate/core';
import { Http, Headers, RequestOptions} from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkLayerService {

  constructor(private translateService: TranslateService, private http:Http) { }


  login(username, password) {
    const encodedCredentials = window.btoa(username + ':' + password);
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encodedCredentials,
      'TPISClientId': Constants.clientId
    });

    const data = 'grant_type=password';

    return this.GetApiHttpRequest(false, '/token', 'POST', false, data, headers);
  }

  IsApiUrl(url) {
    const apiUrlSupportsLang = this.GetApiBaseUrl();
    const apiUrlNoLang = this.GetApiBaseUrlNoLang();

    if ((url.indexOf(apiUrlSupportsLang) >= 0) ||
        (url.indexOf(apiUrlNoLang) >= 0)) {
        return true;
    } else {
        return false;
    }
  }

  /* Convenience method for returning constants.apiBaseUrl.  Adding this method for clarity of how these are used in the NetworkLayer.js */
  GetApiBaseUrlNoLang() {
      return Constants.apiBaseUrl;
  }

  /* Convenience method for getting the API's base url from the configured constants.apiBaseUrl setting and inserting the
    /{lang}/ segment if needed (based on Translations.currentLanguageCode) */
  GetApiBaseUrl() {
    let result = Constants.apiBaseUrl;
    if (this.translateService.currentLang !== '') {
        const langApiUrlSegment = '/' + this.translateService.currentLang + '/api';
        result = result.replace('/api', langApiUrlSegment);
    }
    return result;
  }

  GetApiHttpRequest(supportsLangParam, url, method, cache, data, headers) {
    if (!headers) {
      headers = { 'Content-Type': 'application/json'};
    }

    let fullUrl;
    if (supportsLangParam) {
      fullUrl = this.GetApiBaseUrl() + url;
    } else {
      fullUrl = this.GetApiBaseUrlNoLang() + url;
    }

    return this.GetHttpRequest(fullUrl, method, cache, data, headers);
  }

  /* Generic $http request method */
  GetHttpRequest(url, method, cache, data, headers) {
    console.log('RequestsFactory.GetHttpRequest: ' + method + ' : ' + url);

    // do nocache manually here since sending cache: false through below is not working (at least not in ionic)
    if (!cache) {
      if (!headers) {
        headers = {};
      }

      headers['Cache-Control'] = 'no-cache';
      headers['Pragma'] = 'no-cache';
    }

    const requestOptions = new RequestOptions();
    requestOptions.headers = headers;
    requestOptions.params = data;
    requestOptions.method = method;

    // method,url,headers,data

    return this.http.request(url,requestOptions).pipe(map(response => response.json()));
    //   {
    //     headers: headers,
    //     method: method,
    //     url: url,
    //     data: data
    //   }
    // );
  }
}
