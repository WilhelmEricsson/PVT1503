package com.pvt15.DB.controller;


import com.pvt15.DB.entity.LightPostLocations;
import com.pvt15.DB.service.LightPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/resources/lightposts/")
public class LightPostController {
    @Autowired
    private LightPostService lightPostService;

    //--------------------Constructor-------------------------
    public LightPostController() {

    }
    //--------------------Methods----------------------------

    @RequestMapping(path = "/locations", method = RequestMethod.GET)
    public Iterable<LightPostLocations> lightPostLocations(){
        return lightPostService.getAllLightPostsLocations();
    }




}
