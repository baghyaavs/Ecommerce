package com.example.proj.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.proj.model.Orders;
import com.example.proj.model.User;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long>{
	
	public List<Orders> findByCustomer(User customer);

}
