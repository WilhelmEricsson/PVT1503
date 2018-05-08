package com.pvt15.security.service;

import com.pvt15.security.entity.User;
import com.pvt15.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    //-------------------------------Constructor----------------------------------
    public UserService() {

    }


    //-------------------------------Methods--------------------------------------
    public User lookup(String username) throws UsernameNotFoundException {
       Object user = userRepository.findById(username);
       if(!(user instanceof User)) {
           throw new UsernameNotFoundException(username);
       }
        return (User)user;
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public boolean usernameExists(String username) {
      return userRepository.existsById(username);
    }
}
