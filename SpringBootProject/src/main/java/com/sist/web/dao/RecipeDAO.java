package com.sist.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sist.web.entity.*;
import java.util.*;
@Repository
public interface RecipeDAO extends JpaRepository<RecipeEntity, Integer>{
	
	@Query(value="SELECT * FROM recipe ORDER BY no ASC LIMIT :start,20",nativeQuery = true)
	public List<RecipeEntity> recipeListData(@Param("start") Integer start);
	
	@Query(value="SELECT CEIL(COUNT(*)/20.0) FROM recipe",nativeQuery = true)
	public int recipeTotalPage();
}
