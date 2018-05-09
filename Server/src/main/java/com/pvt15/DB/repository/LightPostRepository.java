package com.pvt15.DB.repository;

import com.pvt15.DB.entity.LightPost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LightPostRepository extends CrudRepository<LightPost, Integer> {

}
