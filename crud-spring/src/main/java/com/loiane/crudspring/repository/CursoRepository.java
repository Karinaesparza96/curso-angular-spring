package com.loiane.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loiane.crudspring.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {

}
