package com.sist.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.web.dao.*;
import com.sist.web.entity.*;
import java.util.*;
@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
	@Autowired
	private BoardDAO dao;
	
	// list 또는 VO 넘기기
	
	@GetMapping("board/board_list_react")
	public List<BoardEntity> board_list(String page) {
		if(page==null) page="1";
		int curpage=Integer.parseInt(page);
		int rowSize=10;
		int start=(curpage*rowSize)-rowSize;
		List<BoardEntity> list=dao.boardListData(start);
		for(BoardEntity vo:list) {
			String s=vo.getRegdate();
			String[] ss=s.split(" ");
			vo.setRegdate(ss[0]);
		}
		int totalpage=dao.boardTotalPage();
		
		final int BLOCK = 10;
		int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
		int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
		
		if(endPage>totalpage) endPage=totalpage;
		
		return list;
	}
	
	@GetMapping("board/board_detail_react")
	public BoardEntity board_detail(int no) {
		BoardEntity vo=dao.findByNo(no);
		vo.setHit(vo.getHit()+1);
		dao.save(vo);
		vo=dao.findByNo(no);
		return vo;
	}
	
	@GetMapping("board/board_page_react")
	public PageVO boardPageData(String page) {
		if(page==null) page="1";
		int curpage=Integer.parseInt(page);
		int totalpage=dao.boardTotalPage();
		
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
	
	
	
//	@GetMapping("board_update")
//	public String board_update(int no, Model model) {
//		BoardEntity vo=dao.findByNo(no);
//		model.addAttribute("vo",vo);
//		model.addAttribute("main_html","board/board_update");
//		return "main";
//	}
//	
//	@GetMapping("board_delete")
//	public String board_delete(int no,Model model) {
//		model.addAttribute("no",no);
//		model.addAttribute("main_html","board/board_delete");
//		return "main";
//	}
//	
//	@GetMapping("board_insert")
//	public String board_insert(Model model) {
//		model.addAttribute("main_html","board/board_insert");
//		return "main";
//	}
//	
//	
}
