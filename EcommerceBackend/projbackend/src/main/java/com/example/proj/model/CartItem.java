package com.example.proj.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cart")
public class CartItem {
	    @Id
	    @GeneratedValue
	    private Long id;  
	    @ManyToOne
	    @JoinColumn(name = "product_id")
	    private Product product;
	    private int quantity;
	    
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Product getProduct() {
			return product;
		}
		public void setProduct(Product product) {
			this.product = product;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public CartItem(Product product, int quantity) {
			super();
			this.product = product;
			this.quantity = quantity;
		}
		public CartItem() {
			// TODO Auto-generated constructor stub
		}	    
	}

