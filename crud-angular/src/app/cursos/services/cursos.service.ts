import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../model/curso';
import { Observable, delay, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = '/api/cursos';
  constructor(private http: HttpClient) {}

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(
      delay(500),
      tap((res) => console.log(res))
    );
  }

  findById(id: string): Observable<Curso> {
    const API = `/api/cursos/${id}`;
    return this.http.get<Curso>(API);
  }

  save(record: Partial<Curso>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Curso>) {
    return this.http.post<Curso>(this.API, record);
  }

  private update(record: Partial<Curso>) {
    return this.http.put<Curso>(`${this.API}/${record._id}`, record);
  }

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
