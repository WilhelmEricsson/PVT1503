package com.pvt15.auth.service;

import com.pvt15.auth.entity.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}