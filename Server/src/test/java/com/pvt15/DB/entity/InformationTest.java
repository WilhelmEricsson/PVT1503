package com.pvt15.DB.entity;

import org.junit.Test;

import static org.junit.Assert.*;

public class InformationTest {

    @Test
    public void getId() {
        Information testQuest = new Information("HEJ","TEST");
        boolean idIsNull = false;
        try{
              testQuest.getId();
        }
        catch(NullPointerException e){
           idIsNull = true;
        }
        assertFalse(idIsNull);
    }
}