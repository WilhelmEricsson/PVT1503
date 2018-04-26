package com.pvt15.service;

import com.pvt15.dao.QuestionDAO;
import com.pvt15.entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {
    @Autowired
    private QuestionDAO questionDAO;

    //--------------------Constructor-------------------------
    public QuestionService() {

    }

    public Question getQuestionById(int i) {
        return questionDAO.getQuestionById(i);
    }
    //--------------------Methods----------------------------

}
