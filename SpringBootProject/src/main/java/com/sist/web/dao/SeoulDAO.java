package com.sist.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.*;
import com.sist.web.entity.*;
@Repository
public interface SeoulDAO extends JpaRepository<SeoulEntity, Integer>{
	@Query(value="SELECT * FROM seoul_location ORDER BY no ASC LIMIT :start,20",nativeQuery = true)
	public List<SeoulEntity> seoulLocationListData(@Param("start") Integer start);
	
	@Query(value="SELECT CEIL(COUNT(*)/20.0) FROM seoul_location",nativeQuery = true)
	public int seoulLocationTotalPage();
	
	public SeoulEntity findByNo(@Param("no") Integer no);
}
