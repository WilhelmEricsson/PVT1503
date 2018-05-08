package com.pvt15.security.controller;


import com.pvt15.ServerApplication;
import com.pvt15.security.entity.User;
import com.pvt15.security.service.UserService;
import com.pvt15.security.util.TokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin
public class AuthController {

    private final UserService userService;

    private final TokenProvider tokenProvider;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;


    public AuthController(PasswordEncoder passwordEncoder, UserService userService, TokenProvider tokenProvider,
                          AuthenticationManager authenticationManager){
        this.userService = userService;
        this.tokenProvider = tokenProvider;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;

        User user = new User();
        user.setUsername("admin");
        user.setPassword(this.passwordEncoder.encode("admin"));
        this.userService.save(user);
    }

    @GetMapping("/authenticate")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void authenticate(){

    }

    @PostMapping("/login")
    public String authorize(@Valid @RequestBody User loginUser, HttpServletResponse response){
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginUser.getUsername(),
                loginUser.getPassword());
        try {
            this.authenticationManager.authenticate(authenticationToken);
            return this.tokenProvider.createToken(loginUser.getUsername());
        }
        catch(AuthenticationException e){
            ServerApplication.logger.info("Security exception {}", e.getMessage());
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return null;

        }

    }

    @PostMapping("/signup")
    public String signup(@RequestBody User signupUser){
        if(this.userService.usernameExists(signupUser.getUsername())){
            return "EXISTS";
        }
        signupUser.encodePassword(this.passwordEncoder);
        this.userService.save(signupUser);
        return this.tokenProvider.createToken(signupUser.getUsername());
    }
}
