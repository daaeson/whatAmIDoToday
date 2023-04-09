package com.sist.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/*
no int AI PK 
name varchar(34) 
subject varchar(1000) 
content text 
pwd varchar(10) 
regdate datetime 
hit int
*/
import java.util.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="third_board")
public class BoardEntity {
	@Id
	private int no;
	private int hit;
	private String name,subject,content,pwd,regdate;
}
