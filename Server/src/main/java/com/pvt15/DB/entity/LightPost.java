package com.pvt15.DB.entity;


import javax.persistence.*;


@Entity
@Table(name = "Light_posts")
public class LightPost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = true)
    private int numOfUsersPresent;
    @Column(nullable = true)
    private String colorOfLight;

    @OneToOne(cascade = CascadeType.ALL,targetEntity = LightPostLocations.class)
    private LightPostLocations location;

    //------------------------Constructor-----------------------
    public LightPost(){
    }

    //------------------------Methods---------------------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumOfUsersPresent() {
        return numOfUsersPresent;
    }

    public void setNumOfUsersPresent(int numOfUsersPresent) {
        this.numOfUsersPresent = numOfUsersPresent;
    }

    public String getColorOfLight() {
        return colorOfLight;
    }

    public void setColorOfLight(String colorOfLight) {
        this.colorOfLight = colorOfLight;
    }

    public LightPostLocations getLocation() {
        return location;
    }

    public void setLocation(LightPostLocations location) {
        this.location = location;
    }

    @Override
    public String toString(){
        return "Id: " + id + " Num Of People Present: " + numOfUsersPresent + " Lamp Cclor: " + colorOfLight + " Location " + location.toString();
    }

}
