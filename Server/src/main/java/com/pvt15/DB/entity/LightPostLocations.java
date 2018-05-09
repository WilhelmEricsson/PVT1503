package com.pvt15.DB.entity;

import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class LightPostLocations {


    @Id
    @OneToOne
    int lightPostId;
    String geoLocation;

    //------------------------Constructor-----------------------
    public LightPostLocations(){
    }

    //------------------------Methods---------------------------

    public int getLightPostId() {
        return lightPostId;
    }

    public void setLightPostId(int lightPostId) {
        this.lightPostId = lightPostId;
    }

    public String getGeoLocation() {
        return geoLocation;
    }

    public void setGeoLocation(String geoLocation) {
        this.geoLocation = geoLocation;
    }


}
