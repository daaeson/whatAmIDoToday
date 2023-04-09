package com.sist.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.sist.web.dao.BoardDAO;
import com.sist.web.entity.BoardEntity;

@Controller
public class BoardFController {
	
	@Autowired
	private BoardDAO dao;
	
	@PostMapping("board/board_insert_react")
	public String board_insert_react(BoardEntity vo) {
		dao.save(vo);
		return "redirect:../board/board_list";
	}
}
