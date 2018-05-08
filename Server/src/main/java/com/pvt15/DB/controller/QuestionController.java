package com.pvt15.DB.controller;

import com.pvt15.DB.entity.Question;
import com.pvt15.DB.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    //--------------------Constructor-------------------------
    public QuestionController() {
    }

    //--------------------Methods----------------------------

    @PostMapping("/add")
    public @ResponseBody String addNewQuestion ( @RequestParam String question
            , @RequestParam String category, @RequestParam String[] alternatives) {

        Question newQuestion = new Question(question,category,alternatives);

        questionRepository.save(newQuestion);

        return "Saved";
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<Question> getAllUsers() {
        // This returns a JSON or XML with the users
        return questionRepository.findAll();
    }





}
