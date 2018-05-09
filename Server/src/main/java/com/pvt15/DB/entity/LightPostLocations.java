package com.pvt15.DB.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class LightPostLocations implements Serializable {

    //måste mappas till LightPost så att id:t är samma.
    @Id
    int lightPostId;
    String geoLocationLang;
    String geoLocationLat;

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

    public String getGeoLocationLang() {
        return geoLocationLang;
    }

    public void setGeoLocationLang(String geoLocationLang) {
        this.geoLocationLang = geoLocationLang;
    }

    public String getGeoLocationLat() {
        return geoLocationLat;
    }

    public void setGeoLocationLat(String geoLocationLat) {
        this.geoLocationLat = geoLocationLat;
    }


}
