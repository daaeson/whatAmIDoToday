package com.sist.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.*;
import com.sist.web.entity.*;
@Repository
public interface JejuFoodDAO extends JpaRepository<JejuFoodEntity, Integer>{
	 @Query(value="SELECT * FROM jeju_food LIMIT 0,6", nativeQuery = true)
	 public List<JejuFoodEntity> jejuFoodTop6Data();
	 
	 @Query(value="SELECT * FROM jeju_food "
	 		+ "ORDER BY no ASC LIMIT :start,20",nativeQuery = true)
	 public List<JejuFoodEntity> jejuFoodListData(@Param("start") Integer start);
	 
	 @Query(value="SELECT CEIL(COUNT(*)/20.0) FROM jeju_food",nativeQuery=true)
	 public int jejuFoodTotalPage();
	 
	 public JejuFoodEntity findByNo(@Param("no") Integer no);
	 
	 @Query(value="SELECT * FROM jeju_food "
	 		+ "WHERE title LIKE CONCAT('%',:title,'%') "
	 		+ "LIMIT :start,12",nativeQuery = true)
	 public List<JejuFoodEntity> jejuFindData(@Param("title") String title, @Param("start") Integer start);
	 
	 @Query(value="SELECT CEIL(COUNT(*)/12.0) FROM jeju_food "
		 		+ "WHERE title LIKE CONCAT('%',:title,'%') ",nativeQuery = true)
	 public int jejuFindTotalPage(@Param("title") String title);
		 
	 
}
