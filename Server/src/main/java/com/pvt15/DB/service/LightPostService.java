package com.pvt15.DB.service;

import com.pvt15.DB.entity.LightPost;
import com.pvt15.DB.entity.LightPostLocations;
import com.pvt15.DB.repository.LightPostLocationRepository;
import com.pvt15.DB.repository.LightPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LightPostService {
    @Autowired
    private LightPostRepository lightPostRepository;

    @Autowired
    private LightPostLocationRepository lightPostLocationsRepository;

    //--------------------Constructor-------------------------
    public LightPostService() {

    }

    //--------------------Methods----------------------------

    public Iterable<LightPostLocations> getAllLightPostsLocations() {
        return lightPostLocationsRepository.findAll();

    }
    public Iterable<LightPost> getAllLightPosts() {
        return lightPostRepository.findAll();
    }
    public void addNewLightPost(LightPost lightPost) {
        lightPostRepository.save(lightPost);
    }


}
