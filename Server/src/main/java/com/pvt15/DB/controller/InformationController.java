package com.pvt15.DB.controller;

import com.pvt15.DB.entity.Information;
import com.pvt15.DB.repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/information")
public class InformationController {
    @Autowired
    private InformationRepository informationRepository;

    //--------------------Constructor-------------------------
    public InformationController() {


    }

    //--------------------Methods----------------------------

    @PostMapping("/add")

    public @ResponseBody String addNewInformation ( @RequestParam String name
            , @RequestParam String information) {

        Information newInformation = new Information(name, information);

        informationRepository.save(newInformation);

        return "Saved";
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<Information> getAllInformation() {
        // This returns a JSON or XML with the users
        return informationRepository.findAll();
    }





}
