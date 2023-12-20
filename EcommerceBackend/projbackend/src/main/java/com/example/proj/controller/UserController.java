package com.example.proj.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.proj.model.User;
import com.example.proj.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/proj")
public class UserController {
	
	 @Autowired
	 private UserService userservice;
	 
	 @PostMapping("/register")
	    public ResponseEntity<User>register(@RequestBody User customer) {
	        User registeredCustomer = userservice.register(customer);
	        System.out.println(registeredCustomer.getUserName()+" is saved");
	        return new ResponseEntity<>(registeredCustomer, HttpStatus.CREATED);
	    }
	 
        @PostMapping("/login")
	    public ResponseEntity<?> authenticateUser(@RequestBody User loginRequest) {
        	String email = loginRequest.getEmail();
	        String password = loginRequest.getUserPassword();
	        Optional<User> customer = userservice.login(email, password);
	        if (customer.isPresent()) {
	        	System.out.println("customer is present");
	            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
	        } else {
	        	System.out.println("customer is not present");
	            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
	        }
	    }
}

