import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
/* global kakao */
function SeoulDetail(props){
    let {no}=useParams();
    const [seoulDetail,setSeoulDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/seoul/location_detail_react",{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setSeoulDetail(response.data)
        })
    },{})
    useEffect(()=>{
        const script=document.createElement("script")
        script.async=true
        script.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=eb992c795fa94bae790a5fc3b0ef5311&libraries=services"
        document.head.appendChild(script)
        script.onload=()=>{
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

            // 지도를 생성합니다
            var map = new kakao.maps.Map(mapContainer, mapOption);

            // 주소-좌표 변환 객체를 생성합니다
            var geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(seoulDetail.address, function(result, status) {

                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style={{"width":"150px","textAlign":"center","padding":"6px 0">'+seoulDetail.title+'</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }
            });

        }
    })
    return (
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content three_quarter first">
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td width={"30%"} rowSpan={"7"}>
                                <img src={seoulDetail.poster} style={{"width":"100%"}}/>
                            </td>
                            <td colSpan={"2"}>{seoulDetail.title}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>주소</th>
                            <td width={"50%"}>{seoulDetail.address}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>정보</th>
                            <td width={"50%"}>{seoulDetail.msg}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sidebar one_quarter">
                    <div id="map" style={{"width":"100%","height":"350px"}}></div>
                </div>
            </main>
        </div>
    )
}

export default SeoulDetail;