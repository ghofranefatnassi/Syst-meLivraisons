import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * GET request
   * @param path The endpoint path
   * @param params The request parameters
   * @param headers Optional headers
   */
  public get<T>(path: string, params?: Record<string, any>, headers?: Record<string, string>): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }

    let httpHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach(key => {
        httpHeaders = httpHeaders.append(key, headers[key]);
      });
    }

    return this.http.get<T>(`${this.apiUrl}${path}`, {
      params: httpParams,
      headers: httpHeaders
    });
  }

  /**
   * POST request
   * @param path The endpoint path
   * @param body The request body
   * @param params The request parameters
   * @param headers Optional headers
   */
  public post<T>(path: string, body: any, params?: Record<string, any>, headers?: Record<string, string>): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }

    let httpHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach(key => {
        httpHeaders = httpHeaders.append(key, headers[key]);
      });
    }

    return this.http.post<T>(`${this.apiUrl}${path}`, body, {
      params: httpParams,
      headers: httpHeaders
    });
  }

  /**
   * PUT request
   * @param path The endpoint path
   * @param body The request body
   * @param params The request parameters
   * @param headers Optional headers
   */
  public put<T>(path: string, body: any, params?: Record<string, any>, headers?: Record<string, string>): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }

    let httpHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach(key => {
        httpHeaders = httpHeaders.append(key, headers[key]);
      });
    }

    return this.http.put<T>(`${this.apiUrl}${path}`, body, {
      params: httpParams,
      headers: httpHeaders
    });
  }

  /**
   * DELETE request
   * @param path The endpoint path
   * @param params The request parameters
   * @param headers Optional headers
   */
  public delete<T>(path: string, params?: Record<string, any>, headers?: Record<string, string>): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }

    let httpHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach(key => {
        httpHeaders = httpHeaders.append(key, headers[key]);
      });
    }

    return this.http.delete<T>(`${this.apiUrl}${path}`, {
      params: httpParams,
      headers: httpHeaders
    });
  }
}