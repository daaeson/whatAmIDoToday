package com.sist.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/*
NO int 
TITLE text 
POSTER text 
CHEF text 
LINK text 
HIT int
*/
@Getter
@Setter
@Entity
@Table(name="recipe")
public class RecipeEntity {
	@Id
	private int no;
	private int hit;
	private String title,poster,chef,link;
}
