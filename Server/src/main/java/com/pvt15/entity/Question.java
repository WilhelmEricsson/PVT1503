package com.pvt15.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String category; // ska kanske vara en egen klass
	private String question;
	private String[] alternatives;
	
	//--------------------Constructor-------------------------
	public Question(  String question,String category, String[] alternatives){

		this.question = question;
        this.category = category;
		this.alternatives = alternatives;
	}public Question(){
    }
	//--------------------Methods-----------------------------
	
	public String getGategory(){
		return category;
	}
	public String getQuestion(){
		return question;
	}
	public int getId(){
		return id;
	}
	public String[] getAlternatives(){
		return alternatives;
	}
	public void setId(int id) {
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
