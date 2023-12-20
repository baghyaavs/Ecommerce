package com.example.proj.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.proj.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	 Optional<User> findByEmailAndUserPassword(String email,String userPassword);
		

}
