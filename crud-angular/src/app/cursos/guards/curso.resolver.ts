import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<Curso> {
  constructor(private service: CursosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Curso> {
    if (route.params && route.params['id']) {
      console.log(route.params);
      return this.service.findById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '' });
  }
}
