package com.pvt15.DB.entity;

import javax.persistence.*;
import java.awt.*;

@Entity
@Table(name = "Light_posts")
public class LightPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int numOfUsersPresent;
    private Color colorOfLight;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "light_post_locations_id")
    private LightPostLocations location;

    //------------------------Constructor-----------------------
    public LightPost(){
    }

    //------------------------Methods---------------------------

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public int getNumOfUsersPresent() {
        return numOfUsersPresent;
    }

    public void setNumOfUsersPresent(int numOfUsersPresent) {
        this.numOfUsersPresent = numOfUsersPresent;
    }

    public Color getColorOfLight() {
        return colorOfLight;
    }

    public void setColorOfLight(Color colorOfLight) {
        this.colorOfLight = colorOfLight;
    }

    public LightPostLocations getLocation() {
        return location;
    }

    public void setLocation(LightPostLocations location) {
        this.location = location;
    }

}
