import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";
function BoardDetail(props){
    let {no}=useParams();
    let [boardDetail,setBoardDetail]=useState({})
    useEffect(()=> {
        axios.get("http://localhost/board/board_detail_react", {
            params: {
                no: no
            }
        }).then(response => {
            console.log(response.data)
            setBoardDetail(response.data)
        })
    },{})

    return (
        <Fragment>
            <div className="wrapper row3">
                <main className="container clear">
                    <table className={"table"} style={{"width":"800px","marginLeft":"auto","marginRight":"auto"}}>
                        <tbody>
                        <tr>
                            <td width="20%" style={{"fontFamily":"IBMPlexSansKR-Regular"}} className="text-center warning">번호</td>
                            <td width="30%" className="text-center" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{boardDetail.no}</td>
                            <td width="20%" className="text-center warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>작성일</td>
                            <td width="30%" className="text-center" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{boardDetail.regdate}</td>
                        </tr>
                        <tr>
                            <td width="20%" className="text-center warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>이름</td>
                            <td width="30%" className="text-center" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{boardDetail.name}</td>
                            <td width="20%" className="text-center warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>조회수</td>
                            <td width="30%" className="text-center" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{boardDetail.hit}</td>
                        </tr>
                        <tr>
                            <td width="20%" className="text-center warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>제목</td>
                            <td colSpan="3" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{boardDetail.subject}</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="text-left" valign="top" height="200">
                                <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none","fontFamily":"IBMPlexSansKR-Regular"}}>{boardDetail.content}</pre>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="text-right">
                                <a href="#" className="btn btn-sm btn-warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>수정</a>&nbsp;
                                <a href="#" className="btn btn-sm btn-default" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>삭제</a>&nbsp;
                                <NavLink to={"/board/board_list"} className="btn btn-sm btn-warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>목록</NavLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </Fragment>
    )
}

export default BoardDetail;