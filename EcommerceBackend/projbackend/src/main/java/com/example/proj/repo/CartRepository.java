package com.example.proj.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.proj.model.CartItem;
import com.example.proj.model.Product;
@Repository
public interface CartRepository extends JpaRepository<CartItem, Long>{

	CartItem findByProduct(Product product);
	
}
