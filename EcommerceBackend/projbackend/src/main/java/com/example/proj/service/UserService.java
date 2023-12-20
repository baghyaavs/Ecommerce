package com.example.proj.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proj.model.User;
import com.example.proj.repo.UserRepository;
@Service
public class UserService {
	 @Autowired
	 private UserRepository userrepo;
	 
	 
	 public Optional<User>login(String email, String userPassword) {
		return userrepo.findByEmailAndUserPassword(email, userPassword);
    }
	 public User findByEmailAndPassword(String email, String userPassword) {
	    	return userrepo.findByEmailAndUserPassword(email,userPassword).orElse(null);
	    }
	 public User register(User customer) {
	    	customer.setUserPassword(customer.getUserPassword());
	    	customer.setEmail(customer.getEmail());
	    	customer.setUserName(customer.getUserName());
	        return userrepo.save(customer);
	    }
	public User getUserById(Long sno) {
		 Optional<User> optionalUser = userrepo.findById(sno);
	        return optionalUser.orElse(null);
	}

}
