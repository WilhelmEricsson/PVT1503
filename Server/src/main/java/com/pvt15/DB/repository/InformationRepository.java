package com.pvt15.DB.repository;


import com.pvt15.DB.entity.Information;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InformationRepository extends CrudRepository<Information, Integer> {


    //--------------------Constructor-------------------------

    //--------------------Methods----------------------------

    List<Information> findByName(@Param("name") String name);
    List<Information> findById(@Param("id") int id);

    List<Information> findByLightPostId(@Param("lightPost_id") Long lightPostId);


}