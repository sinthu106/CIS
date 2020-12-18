package com.feedback.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String providerName;
	private String providerEmail;
	private String userType;
	private Boolean brakeWorks;
	private Boolean seatbeltWorks;
	private Boolean hornWorks; //this 
	private Boolean hornAleart;
	private int speed;
	private String owerV;
	private String otherV;
	private String whatImprove;
	private String location;
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date feedBackDate;
	
	public Feedback() {}
	
	public String getProviderName() {
		return providerName;
	}
	public void setProviderName(String providerName) {
		this.providerName = providerName;
	}
	public String getProviderEmail() {
		return providerEmail;
	}
	public void setProviderEmail(String providerEmail) {
		this.providerEmail = providerEmail;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public Boolean getBrakeWorks() {
		return brakeWorks;
	}

	public void setBrakeWorks(Boolean brakeWorks) {
		this.brakeWorks = brakeWorks;
	}

	public Boolean getSeatbeltWorks() {
		return seatbeltWorks;
	}

	public void setSeatbeltWorks(Boolean seatbeltWorks) {
		this.seatbeltWorks = seatbeltWorks;
	}

	public Boolean getHornWorks() {
		return hornWorks;
	}

	public void setHornWorks(Boolean hornWorks) {
		this.hornWorks = hornWorks;
	}

	public Boolean getHornAleart() {
		return hornAleart;
	}

	public void setHornAleart(Boolean hornAleart) {
		this.hornAleart = hornAleart;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}

	public Date getFeedBackDate() {
		return feedBackDate;
	}

	public void setFeedBackDate(Date feedBackDate) {
		this.feedBackDate = feedBackDate;
	}

	public String getOwerV() {
		return owerV;
	}

	public void setOwerV(String owerV) {
		this.owerV = owerV;
	}

	public String getOtherV() {
		return otherV;
	}

	public void setOtherV(String otherV) {
		this.otherV = otherV;
	}

	public String getWhatImprove() {
		return whatImprove;
	}

	public void setWhatImprove(String whatImprove) {
		this.whatImprove = whatImprove;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	

}
