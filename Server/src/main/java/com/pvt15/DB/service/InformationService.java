package com.pvt15.DB.service;

import com.pvt15.DB.repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InformationService {
    @Autowired
    private InformationRepository informationRepository;

    //--------------------Constructor-------------------------
    public InformationService() {

    }


    //--------------------Methods----------------------------

}
