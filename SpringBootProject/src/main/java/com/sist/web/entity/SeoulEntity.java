package com.sist.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;
/*
NO int 
TITLE text 
POSTER text 
MSG text 
ADDRESS text 
HIT int
*/
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="seoul_location")
@SecondaryTables({
    @SecondaryTable(name = "seoul_nature"),
    @SecondaryTable(name = "seoul_shop")
})
public class SeoulEntity {
	@Id
	private int no;
	private int hit;
	private String title,poster,msg,address;
}
