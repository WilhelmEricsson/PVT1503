package com.pvt15.service;

import com.pvt15.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    //--------------------Constructor-------------------------
    public QuestionService() {

    }


    //--------------------Methods----------------------------

}
