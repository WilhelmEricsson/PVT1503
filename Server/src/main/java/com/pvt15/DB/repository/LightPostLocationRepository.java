package com.pvt15.DB.repository;

import com.pvt15.DB.entity.LightPostLocations;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LightPostLocationRepository extends CrudRepository<LightPostLocations, Integer> {

}
