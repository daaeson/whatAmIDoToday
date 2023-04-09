package com.sist.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sist.web.dao.*;
import com.sist.web.entity.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class SeoulController {
	@Autowired
	private SeoulDAO dao;
	
	@GetMapping("seoul/location_list_react")
	public List<SeoulEntity> seoul_list(String page){
		if(page==null) page="1";
		int curpage = Integer.parseInt(page);
		int rowSize = 20;
		int start = (rowSize*curpage)-rowSize;
		List<SeoulEntity> list = dao.seoulLocationListData(start);
		int totalpage=dao.seoulLocationTotalPage();
		
		final int BLOCK = 10;
		int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
		int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
		
		if(endPage>totalpage) endPage=totalpage;
		
		return list;
	}
	
	@GetMapping("seoul/location_page_react")
	public PageVO seoulLocationPageData(String page) {
		if(page==null) page="1";
		int curpage = Integer.parseInt(page);
		int totalpage=dao.seoulLocationTotalPage();
		
		final int BLOCK = 10;
		int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
		int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
		
		if(endPage>totalpage) endPage=totalpage;
		
		PageVO vo = new PageVO();
		vo.setCurpage(curpage);
		vo.setEndPage(endPage);
		vo.setStartPage(startPage);
		vo.setTotalpage(totalpage);
		
		return vo;
	}
	
	@GetMapping("seoul/location_detail_react")
	public SeoulEntity seoul_location_detail(int no) {
		SeoulEntity vo = dao.findByNo(no);
		return vo;
	}
	
	
}
