package com.pvt15.security.service;

import com.pvt15.security.entity.User;
import com.pvt15.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    //-------------------------------Constructor----------------------------------
    public UserService() {

    }


    //-------------------------------Methods--------------------------------------
    public User lookup(String username){
        Optional<User> userOptional = userRepository.findById(username);
        if(userOptional.isPresent()){
            return userOptional.get();
        }
        return null;
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public boolean usernameExists(String username) {
      return userRepository.existsById(username);
    }
}
