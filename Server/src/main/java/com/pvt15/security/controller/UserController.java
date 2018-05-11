package com.pvt15.security.controller;


import com.pvt15.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/User")
public class UserController{
    @Autowired
    UserService userService;

    public UserController(){

    }



}
