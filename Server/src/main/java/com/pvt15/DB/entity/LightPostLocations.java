package com.pvt15.DB.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "light_post_locations")
public class LightPostLocations implements Serializable {

    @Id
    private int id;
    private String geoLocationLang;
    private String geoLocationLat;

    @OneToOne(mappedBy = "location")
    private LightPost lightPost;

    //------------------------Constructor-----------------------
    public LightPostLocations(){
    }

    //------------------------Methods---------------------------

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LightPost getLightPost() {
        return lightPost;
    }

    public void setLightPost(LightPost lightPost) {
        this.lightPost = lightPost;
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
