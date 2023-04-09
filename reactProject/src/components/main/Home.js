import {Fragment, useEffect,useState} from "react";
import Header from "./Header";
import axios from "axios";
function Home(){
    const [foodTop,setFoodTop]=useState([])
    // 서버 연결 후 데이터 읽기
    useEffect(()=>{
        axios.get("http://localhost/jeju/food_top6").then(response=>{
            console.log(response.data)
            setFoodTop(response.data)
        })
    },[])
    let html=foodTop.map((food)=>
        <li className="one_third">
            <article><a href="#"><img src={food.poster} style={{"width":"100%"}}/></a>
                <h6 className="heading" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{food.title}</h6>
                <p style={{"fontFamily":"IBMPlexSansKR-Regular"}}>{food.addr}</p>
            </article>
        </li>
    )
    return(
        <Fragment> {/*주석은 이렇게 걸어야 한다*/}
            <div className="bgded overlay" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1551447456-b9ef333d1ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"}}>
                <div id="pageintro" className="hoc clear">
                    <article>
                        <h3 className="heading" style={{"fontFamily":"IBMPlexSansKR-Regular"}}>제주 식도락</h3>
                        <p style={{"fontFamily":"IBMPlexSansKR-Regular"}}>제주도는 흑돼지, 해산물 등 신선한 제주산 식재료를 독특하게 해석한 음식이 많아요.<br/>
                            아름다운 바다를 조망할 수 있는 멋진 카페나 해녀가 갓 잡은 해산물 음식점 등<br/>
                            제주에서만 만날 수 있는 멋진 맛집들이 많답니다.</p>
                        <footer><a className="btn" href="/jeju/food_list"f style={{"fontFamily":"IBMPlexSansKR-Regular"}}>제주도의 식도락</a></footer>
                    </article>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="hoc container clear">

                </main>
            </div>
            <div className="bgded overlay light">
                <section id="services" className="hoc container clear">
                    <ul className="nospace group elements elements-three">
                        {html}
                    </ul>
                </section>
            </div>
        </Fragment>
    )
}

export default Home;