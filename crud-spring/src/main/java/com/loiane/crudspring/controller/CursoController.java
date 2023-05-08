package com.loiane.crudspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loiane.crudspring.model.Curso;
import com.loiane.crudspring.repository.CursoRepository;

@RestController
@RequestMapping("api/cursos")

public class CursoController {

  private final CursoRepository cursoRepository;

  public CursoController(CursoRepository cursoRepository) {
    this.cursoRepository = cursoRepository;
  }

  @GetMapping
  public List<Curso> list() {
    return cursoRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Curso> findById(@PathVariable Long id) {
    return cursoRepository.findById(id)
        .map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Curso> create(@RequestBody Curso curso) {
    // return cursoRepository.save(curso);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(cursoRepository.save(curso));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Curso> update(@PathVariable Long id, @RequestBody Curso curso) {
    return cursoRepository.findById(id)
        .map(recordFound -> {
          recordFound.setName(curso.getName());
          recordFound.setCategory(curso.getCategory());
          Curso updated = cursoRepository.save(recordFound);
          return ResponseEntity.ok().body(updated);
        })
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    return cursoRepository.findById(id)
        .map(recordFound -> {
          cursoRepository.deleteById(id);
          return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
  }

}
