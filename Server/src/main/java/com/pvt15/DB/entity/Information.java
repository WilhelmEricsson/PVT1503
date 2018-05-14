package com.pvt15.DB.entity;

import javax.persistence.*;


@Entity
@Table(name = "information")
public class Information {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	private String name;
	private String information;

	
	//--------------------Constructor-------------------------
	public Information(){

	}
	public Information(String name, String information){
		super();
		this.name = name;
		this.information = information;

	}
	//--------------------Methods-----------------------------
	public Integer getId(){
		return id;
	}
	public String getName(){return name;}
	public String getInformation(){
		return information;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name){ this.name = name; }

	public void setInformation(String information) {
		this.information = information;
	}


	
}
