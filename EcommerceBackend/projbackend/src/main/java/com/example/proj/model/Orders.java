package com.example.proj.model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long saleId;
    @ManyToOne
    @JoinColumn(name = "cust_id")
    private User customer;
    private Date saleDate;
    private double totalInvoiceAmount;
    private double discount;
    private String paymentNaration;
    private String deliveryAddress1;
    private String deliveryAddress2;
    private String deliveryCity;
    private String deliveryPinCode;
    private String deliveryLandMark;
	public Long getSaleId() {
		return saleId;
	}
	public void setSaleId(Long saleId) {
		this.saleId = saleId;
	}
	public User getCustomer() {
		return customer;
	}
	public void setCustomer(User customer) {
		this.customer = customer;
	}
	public Date getSaleDate() {
		return saleDate;
	}
	public void setSaleDate(Date saleDate) {
		this.saleDate = saleDate;
	}
	public double getTotalInvoiceAmount() {
		return totalInvoiceAmount;
	}
	public void setTotalInvoiceAmount(double totalInvoiceAmount) {
		this.totalInvoiceAmount = totalInvoiceAmount;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public String getPaymentNaration() {
		return paymentNaration;
	}
	public void setPaymentNaration(String paymentNaration) {
		this.paymentNaration = paymentNaration;
	}
	public String getDeliveryAddress1() {
		return deliveryAddress1;
	}
	public void setDeliveryAddress1(String deliveryAddress1) {
		this.deliveryAddress1 = deliveryAddress1;
	}
	public String getDeliveryAddress2() {
		return deliveryAddress2;
	}
	public void setDeliveryAddress2(String deliveryAddress2) {
		this.deliveryAddress2 = deliveryAddress2;
	}
	public String getDeliveryCity() {
		return deliveryCity;
	}
	public void setDeliveryCity(String deliveryCity) {
		this.deliveryCity = deliveryCity;
	}
	public String getDeliveryPinCode() {
		return deliveryPinCode;
	}
	public void setDeliveryPinCode(String deliveryPinCode) {
		this.deliveryPinCode = deliveryPinCode;
	}
	public String getDeliveryLandMark() {
		return deliveryLandMark;
	}
	public void setDeliveryLandMark(String deliveryLandMark) {
		this.deliveryLandMark = deliveryLandMark;
	}
	public Orders(Long saleId, User customer, Date saleDate, double totalInvoiceAmount, double discount,
			String paymentNaration, String deliveryAddress1, String deliveryAddress2, String deliveryCity,
			String deliveryPinCode, String deliveryLandMark) {
		super();
		this.saleId = saleId;
		this.customer = customer;
		this.saleDate = saleDate;
		this.totalInvoiceAmount = totalInvoiceAmount;
		this.discount = discount;
		this.paymentNaration = paymentNaration;
		this.deliveryAddress1 = deliveryAddress1;
		this.deliveryAddress2 = deliveryAddress2;
		this.deliveryCity = deliveryCity;
		this.deliveryPinCode = deliveryPinCode;
		this.deliveryLandMark = deliveryLandMark;
	}

    
    
	
}
