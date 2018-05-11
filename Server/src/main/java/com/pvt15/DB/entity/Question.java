package com.pvt15.DB.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String category;
	private String question;
	private String[] alternatives;
	
	//--------------------Constructor-------------------------
	public  Question(){

	}
	public Question(  String question,String category, String[] alternatives){
		super();
		this.question = question;
        this.category = category;
		this.alternatives = alternatives;
	}
	//--------------------Methods-----------------------------
	
	public String getGategory(){
		return category;
	}
	public String getQuestion(){
		return question;
	}
	public Integer getId(){
		return id;
	}
	public String[] getAlternatives(){
		return alternatives;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public void setAlternatives(String[] alternatives) {
		this.alternatives = alternatives;
	}
	
}
