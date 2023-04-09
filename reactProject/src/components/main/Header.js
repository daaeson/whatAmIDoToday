import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
/*
    <초창기 형태>
    1. 메모리 할당
    2. componentWillMount() : 가장 먼저 돌아가는 함수
    3. componentDidMount()
        mount : 가상 메모리(virtual dom)
    ===================================== 데이터를 서버로부터 읽기
        => useEffect() : will, did mount를 수행한다
    4. render() => 화면 출력 시 사용
    5. componentWillUpdate()
    6. componentDidUpdate()
        => setXxx => did update를 수행, 화면에 출력해준다
    6-1. render() (수정된 부분을 화면에 재출력)
    7. componentWillDestroy()
    8. componentDidDestroy()

    ==> props : 호출 시 전송 (불변하는 변수)
        state : 변경이 가능한 데이터

    => react : 데이터 상태 관리 프로그램
        class : 멤버변수 설정 가능
        function : 지역변수 => useState()를 사용하여 유지하는 변수 => Hooks
*/
// <Header /> 로 호출하면 return 값을 읽어서 index.html 내에 삽입
function Header(props){
    return(
        <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <h1 className="logoname" style={{"fontFamily":"establishThornFontOTF","marginTop":"5px"}}><NavLink to={"/"}>P의 <span>오늘</span>무ㅓ하지?</NavLink></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear" style={{"marginTop":"0px"}}>
                        <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                        <li><a className="drop" href="#">제주</a>
                            <ul>
                                <li><NavLink to={"/jeju/food_list"}>식도락</NavLink></li>
                                <li><NavLink to={"/jeju/event_list"}>행사&이벤트</NavLink></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">서울</a>
                            <ul>
                                <li><NavLink to={"/seoul/location_list"}>서울의 곳곳</NavLink></li>
                                <li><a href="pages/full-width.html">자연/관광</a></li>
                                <li><a href="pages/full-width.html">쇼핑</a></li>
                            </ul>
                        </li>
                        <li><NavLink className="drop" to={"/recipe/recipe_list"}>뭐 해먹지?</NavLink>
                            <ul>
                                <li><NavLink to={"/recipe/recipe_list"}>레시피</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/board/board_list"}>커뮤니티</NavLink></li>
                        <li><NavLink to={"/jeju/food_find"}>맛집 검색</NavLink></li>
                        <li><NavLink to={"/news/news_list"}>뉴스 검색</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;