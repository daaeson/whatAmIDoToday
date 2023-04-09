import {Fragment, useEffect, useState} from "react";
import axios from "axios";

function EventList(){
    const [locationList,setLocationList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost/jeju/location_list_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setLocationList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/jeju/location_page_react",{
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
        axios.get("http://localhost/jeju/location_list_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setLocationList(response.data)
        })
        axios.get("http://localhost/jeju/location_page_react",{

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
    let html=locationList.map((location,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <a href="#">
                <img src={location.poster} title={location.title}/>
                <hr/>
                <p style={{"fontFamily":"IBMPlexSansKR-Regular","text-align":"center"}}>{location.title}</p>
            </a>
        </li>
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
                        <div id="gallery">
                            <figure>
                                <header className="heading" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>제주의 행사</header>
                                <ul className="nospace clear">
                                    {html}
                                </ul>
                            </figure>
                        </div>
                        <nav className="pagination">
                            <ul>
                                {row}
                            </ul>
                        </nav>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}

export default EventList;