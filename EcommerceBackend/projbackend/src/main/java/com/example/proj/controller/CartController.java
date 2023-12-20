package com.example.proj.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.proj.model.Product;
import com.example.proj.service.CartService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/proj")
public class CartController {
	    @Autowired
	    private CartService cartService;

	    @PostMapping("/addtoCart")
	    public ResponseEntity<String> addToCart(@RequestBody Product product) {
	        cartService.addToCart(product);
	        return ResponseEntity.ok("{\"message\": \"Product added to cart successfully\"}");
	    }
	
}