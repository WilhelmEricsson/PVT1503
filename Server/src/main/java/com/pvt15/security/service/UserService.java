package com.pvt15.security.service;

import com.pvt15.security.Entity.User;
import com.pvt15.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.rmi.NoSuchObjectException;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    //-------------------------------Constructor----------------------------------
    public UserService() {

    }


    //-------------------------------Methods--------------------------------------
    public User lookup(String username) { //EXECPTION
       Object user = userRepository.findById(username);

        return (User)user;
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public boolean usernameExists(String username) {
      return userRepository.existsById(username);
    }
}
