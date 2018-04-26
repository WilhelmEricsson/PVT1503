package com.pvt15.controller;

import com.pvt15.entity.Question;
import com.pvt15.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    //--------------------Constructor-------------------------
    public QuestionController() {
    }

    //--------------------Methods----------------------------

    @RequestMapping("/test")
    public String test(){
        return "TEST!";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Question getQuestionById(@PathVariable("id") int id){
        return questionService.getQuestionById(id);
    }





}
