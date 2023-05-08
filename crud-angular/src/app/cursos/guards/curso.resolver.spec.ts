import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cursoResolver } from './curso.resolver';

describe('cursoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cursoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
