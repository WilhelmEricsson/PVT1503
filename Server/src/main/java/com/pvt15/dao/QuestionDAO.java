package com.pvt15.dao;


import com.pvt15.entity.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionDAO extends CrudRepository<Question, Integer>{


	
	//--------------------Constructor-------------------------

    //--------------------Methods----------------------------




}
