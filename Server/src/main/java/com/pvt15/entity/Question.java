package com.pvt15.entity;

public class Question {
	private int id;
	private String category; // ska kanske vara en egen klass
	private String question;
	private String[] alternatives;
	
	//--------------------Constructor-------------------------
	public Question(int id, String category, String question, String[] alternatives){
		this.id = id;
		this.category = category;
		this.question = question;
		this.alternatives = alternatives;
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
	
}
