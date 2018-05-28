package com.pvt15.security.controller;

import com.pvt15.security.entity.User;
import com.pvt15.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/User")
public class UserController{
    @Autowired
    UserService userService;

    public UserController(){

    }

    @GetMapping("/{userName}")
    public User getUserInformation(@PathVariable String userName){
         return userService.getUserInformation(userName);

    }

    @PostMapping("/{userName")
    public boolean deleteUser(@PathVariable String userName){
        return userService.deleteUser(userName);
    }


}
