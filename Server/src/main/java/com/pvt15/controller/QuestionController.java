package com.pvt15.controller;

import com.pvt15.entity.Question;
import com.pvt15.dao.QuestionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    @Autowired
    private QuestionDAO questionDAO;

    //--------------------Constructor-------------------------
    public QuestionController() {
    }

    //--------------------Methods----------------------------

    @PostMapping(path="/add")
    public @ResponseBody String addNewQuestion (@RequestParam String question
            , @RequestParam String category, @RequestParam String[] alternatives) {

        Question newQuestion = new Question(question, category, alternatives);
        System.out.println(newQuestion.getId());
        questionDAO.save(newQuestion);

        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Question> getAllUsers() {
        // This returns a JSON or XML with the users
        return questionDAO.findAll();
    }





}
