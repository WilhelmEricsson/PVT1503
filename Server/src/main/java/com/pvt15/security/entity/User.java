package com.pvt15.security.entity;

import org.springframework.security.crypto.password.PasswordEncoder;


import javax.persistence.*;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(length = 100)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    //--------------------------Constructor------------------------
    public User(){
    }
    //--------------------------Methods----------------------------

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
    }
}
