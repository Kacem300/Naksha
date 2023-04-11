package io.nakcha.spring.prod.model.repository;
import io.nakcha.spring.prod.model.car;

import org.springframework.data.repository.CrudRepository;


public interface CarRepo extends CrudRepository<car,Long> {
}
