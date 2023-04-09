package com.sist.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.sist.web.dao.*;
import com.sist.web.entity.*;
@RestController
@CrossOrigin("http://localhost:3000")
public class RecipeController {
	@Autowired
	private RecipeDAO dao;
	
	@GetMapping("recipe/recipe_list_react")
	public List<RecipeEntity> recipe_list(String page){
		if(page==null) page="1";
		int curpage = Integer.parseInt(page);
		int rowSize = 20;
		int start = (rowSize*curpage)-rowSize;
		List<RecipeEntity> list = dao.recipeListData(start);
		int totalpage=dao.recipeTotalPage();
		
		final int BLOCK = 10;
		int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
		int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
		
		if(endPage>totalpage) endPage=totalpage;
		
		return list;
	}
	
	@GetMapping("recipe/recipe_page_react")
	public PageVO recipePageData(String page) {
		if(page==null) page="1";
		int curpage = Integer.parseInt(page);
		int totalpage=dao.recipeTotalPage();
		
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
}
