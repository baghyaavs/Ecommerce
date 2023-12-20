package com.example.proj.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proj.model.CartItem;
import com.example.proj.model.Product;
import com.example.proj.repo.CartRepository;

@Service
public class CartService {
	    @Autowired
	    private CartRepository cartRepository;

	    public void addToCart(Product product) {
	        CartItem cartItem = cartRepository.findByProduct(product);

	        if (cartItem != null) {
	            cartItem.setQuantity(cartItem.getQuantity() + 1);
	        } else {
	            cartItem = new CartItem();
	            cartItem.setProduct(product);
	            cartItem.setQuantity(1);
	        }

	        cartRepository.save(cartItem);
	    }
	    
}
