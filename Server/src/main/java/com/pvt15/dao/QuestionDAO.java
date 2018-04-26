package com.pvt15.dao;


import com.pvt15.entity.Question;
import org.springframework.stereotype.Repository;


@Repository
public class QuestionDAO {

	Question testQuestion;
	
	//--------------------Constructor-------------------------

    public QuestionDAO() {
	    testQuestion = new Question(1,"testKate","Hur går det för oss=", new String[]{"okej!", "Dåligt", "Oklart", "Strålande"});
    }

    public Question getQuestionById(int i) {
        return testQuestion;
    }


    //--------------------Methods----------------------------



}
