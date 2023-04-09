import {Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import FoodList from "./components/food/FoodList";
import EventList from "./components/food/EventList";
import Recipe from "./components/recipe/Recipe";
import FoodDetail from "./components/food/FoodDetail";
import SeoulList from "./components/seoul/SeoulList";
import SeoulDetail from "./components/seoul/SeoulDetail";
import FoodFind from "./components/food/FoodFind";
import NewsList from "./components/news/NewsList";
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardInsert from "./components/board/BoardInsert";
function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/jeju/food_list"} element={<FoodList/>}/>
            <Route path={"/jeju/event_list"} element={<EventList/>}/>
            <Route path={"/recipe/recipe_list"} element={<Recipe/>}/>
            <Route path={"/jeju/food_detail/:no"} element={<FoodDetail/>}/>
            <Route path={"/seoul/location_list/"} element={<SeoulList/>}/>
            <Route path={"/seoul/location_detail/:no"} element={<SeoulDetail/>}/>
            <Route path={"/jeju/food_find"} element={<FoodFind/>}/>
            <Route path={"/news/news_list"} element={<NewsList/>}/>
            <Route path={"/board/board_list"} element={<BoardList/>}/>
            <Route path={"/board/board_detail/:no"} element={<BoardDetail/>}/>
            <Route path={"/board/board_insert"} element={<BoardInsert/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;