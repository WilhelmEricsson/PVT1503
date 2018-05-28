package com.pvt15.security.service;

import com.pvt15.security.entity.User;
import com.pvt15.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    //-------------------------------Constructor----------------------------------
    public UserService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
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

    public User getUserInformation(String userName){
        return userRepository.findById(userName).get();
    }
    public boolean deleteUser(String userId){
        boolean wasDeleted = false;
        if(userRepository.existsById(userId)){
            userRepository.delete(userRepository.findById(userId).get());
            wasDeleted = true;
        }
        return wasDeleted;
    }

    public User updateUserEmail(String userName, String newEmail){

        User tempUser = userRepository.findById(userName).get();
        tempUser.setEmail(newEmail);
        userRepository.save(tempUser);

        return tempUser;
    }


    public void updateUserPassword(String userName, String newPassword){
        User tempUser = userRepository.findById(userName).get();
        tempUser.setPassword(this.passwordEncoder.encode(newPassword));
        userRepository.save(tempUser);

    }
}
