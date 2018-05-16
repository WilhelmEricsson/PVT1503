package com.pvt15.DB.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;



@Entity
@Table(name = "information")
public class Information  {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String name;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="lightPost_id")
	@JsonBackReference
	private LightPost lightPost;

	@Column(length = 500)
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


	public LightPost getLightPost() {
		return lightPost;
	}

	public void setLightPost(LightPost lightPost) {
		this.lightPost = lightPost;
	}

	@Override
	public boolean equals(Object o) {
		if (!(o instanceof Information )) {
			return false;
		}
		return id != null && id.equals(((Information) o).id);
	}

	@Override
	public int hashCode() {
		int hash = 1;
		hash = hash * 17 + id;
		hash = hash * 31 + name.hashCode();
		hash = hash * 13 + (lightPost == null ? 0 :(int)((double)lightPost.getId()));
		return hash;
	}



}
