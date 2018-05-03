package com.pvt15.entity;

import org.junit.Test;

import javax.validation.constraints.Null;

import static org.junit.Assert.*;

public class QuestionTest {

    @Test
    public void getId() {
        Question testQuest = new Question("HEJ","TEST", new String[]{"TEST","TEST"});
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