import {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function BoardList(){
    const [boardList,setBoardList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost/board/board_list_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setBoardList(response.data)
        })

    },[])
    useEffect(()=>{
        axios.get("http://localhost/board/board_page_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    },{})
    // 이벤트 처리
    const pages=(page)=>{
        axios.get("http://localhost/board/board_list_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setBoardList(response.data)
        })
        axios.get("http://localhost/board/board_page_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }
    const pageChange=(page)=>{
        pages(page)
    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }
    let html=boardList.map((board)=>
        <tr>
            <td width="10%" className="text-center">{board.no}</td>
            <td width="45%">
                <NavLink to={"/board/board_detail/"+board.no}>{board.subject}</NavLink>
            </td>
            <td width="15%" className="text-center">{board.name}</td>
            <td width="20%" className="text-center">{board.regdate}</td>
            <td width="10%" className="text-center">{board.hit}</td>
        </tr>
    )
    let row=[];
    if(startPage>1){
        row.push(<li><a href="#" onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage; i<=endPage; i++){
        if(i==curpage){
            row.push(<li className="current"><strong><a href="#" onClick={()=>pageChange(i)}>{i}</a></strong></li>)
        }
        else{
            row.push(<li><a href="#" onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage){
        row.push(<li><a href="#" onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }
    return(
        <Fragment>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <div className="content">
                        <figure>
                            <header className="heading" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>P의 하루
                                <NavLink to={"/board/board_insert"} className="btn btn-sm" style={{"float":"right","marginBottom":"30px","backgroundColor":"#935E1F"}}>새 글</NavLink>
                            </header>
                        </figure>
                        <table className="table">
                            <thead>
                            <tr>
                                <th width="10%" className="text-center" style={{"background-color":"#E69231"}}>번호</th>
                                <th width="45%" className="text-center" style={{"background-color":"#E69231"}}>제목</th>
                                <th width="15%" className="text-center" style={{"background-color":"#E69231"}}>이름</th>
                                <th width="20%" className="text-center" style={{"background-color":"#E69231"}}>작성일</th>
                                <th width="10%" className="text-center" style={{"background-color":"#E69231"}}>조회수</th>
                            </tr>
                            </thead>
                            <tbody>
                                {html}
                            </tbody>
                        </table>
                        <nav className="pagination">
                            <ul>
                                {row}
                            </ul>
                        </nav>
                    </div>
                    <div style={{"height":"100px"}}/>
                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}

export default BoardList;