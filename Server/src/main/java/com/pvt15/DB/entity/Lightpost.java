package com.pvt15.DB.entity;

import org.hibernate.annotations.Tables;

import javax.persistence.*;
import java.awt.*;

@Entity
@Table(name = "Lightposts")
public class Lightpost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int numOfUsersPresent;
    private Color colorOfLight;

    //------------------------Constructor-----------------------
    public Lightpost(){

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


}
