package com.pvt15.security.controller;

import com.pvt15.security.entity.User;
import com.pvt15.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController{

    @Autowired
    UserService userService;

    public UserController(){

    }

    @GetMapping("/{userName}/details")
    public User getUserInformation(@PathVariable String userName){
         return userService.getUserInformation(userName);

    }

    @PostMapping("/{userName}/delete")
    public boolean deleteUser(@PathVariable String userName){
        return userService.deleteUser(userName);
    }

    @PostMapping("/{userName}/update/email")
    public User updateUserInformationEmail(@RequestBody String userName, @RequestBody String newEmail){
        return userService.updateUserEmail(userName, newEmail);
    }
    @PostMapping("/{userName}/update/password")
    public User updateUserInformationPass(@RequestBody String userName, @RequestBody String newPassword){
        return userService.updateUserEmail(userName, newPassword);
    }



}
