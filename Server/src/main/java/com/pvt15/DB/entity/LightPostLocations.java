package com.pvt15.DB.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "light_post_locations")
public class LightPostLocations implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = true)
    private String geoLocationLang;
    @Column(nullable = true)
    private String geoLocationLat;

    @OneToOne
    @PrimaryKeyJoinColumn
    private LightPost lightPost;

    //------------------------Constructor-----------------------
    public LightPostLocations(){
    }

    //------------------------Methods---------------------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    @Override
    public String toString(){
        return "Id " + id + " GeoLang " + geoLocationLang + " GeoLat " + geoLocationLat;
    }


}
