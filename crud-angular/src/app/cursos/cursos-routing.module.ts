import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './container/cursos/cursos.component';
import { CursoFormComponent } from './container/curso-form/curso-form.component';
import { CourseResolver } from './guards/curso.resolver';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
  },
  {
    path: 'novo',
    component: CursoFormComponent,
    resolve: { curso: CourseResolver },
  },
  {
    path: 'editar/:id',
    component: CursoFormComponent,
    resolve: { curso: CourseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
