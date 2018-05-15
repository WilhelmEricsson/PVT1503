package com.pvt15.DB.controller;


import com.pvt15.DB.entity.LightPost;
import com.pvt15.DB.entity.LightPostLocations;
import com.pvt15.DB.service.LightPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Iterable<LightPostLocations> getAllLightPostLocations(
    ){
        return lightPostService.getAllLightPostsLocations();
    }

    @RequestMapping( method = RequestMethod.GET)
    public Iterable<LightPost> getAllLightPosts(
    ){
        return lightPostService.getAllLightPosts();
    }

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    public @ResponseBody String addNewLightPost(@RequestParam Integer numOfUsers, @RequestParam String color,@RequestParam String geoLang,@RequestParam String geoLat){
        LightPost lightPost = new LightPost();
        lightPost.setColorOfLight(color);
        lightPost.setNumOfUsersPresent(numOfUsers);
        LightPostLocations lightPostLocations = new LightPostLocations();
        lightPostLocations.setGeoLocationLang(geoLang);
        lightPostLocations.setGeoLocationLat(geoLat);
        lightPost.setLocation(lightPostLocations);
        try{
            lightPostService.addNewLightPost(lightPost);
        }catch(NullPointerException e){
            return "Error " + e.getMessage();
        }

        return "Light Post Saved";
    }


}
