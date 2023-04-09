import {useState,useEffect,Fragment} from "react";
import axios from "axios";

function BoardInsert(){
    {/* props 안 받아도 되는거 맞나 => 맞음 */}
    {/* const로 받을 값이 없으니 useState도 안 받는 거 맞나 => 아님 값을 받아서 저장해야 함 */}
    {/* useEffect는 받아올 값이 없으니 아님 */}
    const [name,setName]=useState('');
    const [subject,setSubject]=useState('');
    const [content,setContent]=useState('');
    const [pwd,setPwd]=useState('');
    const dataSave1=(e)=>{
        setName(e.target.value)
        console.log(name)
    }
    const dataSave2=(e)=>{
        setSubject(e.target.value)
        console.log(subject)
    }
    const dataSave3=(e)=>{
        setContent(e.target.value)
        console.log(content)
    }
    const dataSave4=(e)=>{
        setPwd(e.target.value)
        console.log(pwd)
    }
    const insert=()=>{
        if(name!=null&&subject!=null&&content!=null&&pwd!=null){
            axios.post("http://localhost/board/board_insert_react",{
                    name:name,
                    subject:subject,
                    content:content,
                    pwd:pwd
                }
            )
        }
        else {
            alert("null 존재")
            console.log(name+"=name")
            console.log(subject+"=subject")
            console.log(content+"=content")
            console.log(pwd+"=pwd")
        }
        {/*params로 값을 다 넘기고(배열을 잡아야 하나) then response는 필요가 없나?*/}
    }
    return(
        <Fragment>
            <div className="wrapper row3">
                <main className="container clear">
                    <table className={"table"} style={{"width":"600px","marginLeft":"auto","marginRight":"auto"}}>
                        <tbody>
                        <tr>
                            <td width="15%" className="text-right warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>이름</td>
                            <td width="80%">
                                <input type="text" name="name" size={"15"} onChange={dataSave1} className="input-sm" style={{"fontFamily":"IBMPlexSansKR-Regular"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td width="15%" className="text-right warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>제목</td>
                            <td width="80%">
                                <input type="text" name="subject" size="60" onChange={dataSave2} className="input-sm" style={{"fontFamily":"IBMPlexSansKR-Regular"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td width="15%" className="text-right warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>내용</td>
                            <td width="80%">
                                <textarea rows="10" cols="60" name="content" onChange={dataSave3} style={{"fontFamily":"IBMPlexSansKR-Regular"}}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td width="15%" class="text-right warning" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>비밀번호</td>
                            <td width="80%">
                                <input type="password" name="pwd" size="15" class="input-sm" onChange={dataSave4} style={{"fontFamily":"IBMPlexSansKR-Regular"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center">
                                <input type="button" value="글쓰기" class="btn btn-sm btn-warning" onClick={insert} style={{"fontFamily":"IBMPlexSansKR-Regular"}}/>
                                &nbsp;&nbsp;
                                <a type="button" class="btn btn-sm btn-warning" href="/board/board_list" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>취소</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </Fragment>
    )
}

export default BoardInsert;