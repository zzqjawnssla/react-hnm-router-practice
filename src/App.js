import {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./Pages/ProductAll";
import Login from "./Pages/Login";
import NavigationBar from "./Componets/NavigationBar";
import PrivateRoute from "./route/PrivateRoute";

//1. 전체상품페이지, 로그인, 상품상세 페이지
//2. 전체 상품페이지에는 전체 상품을 볼수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 먼저 나온다
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃이되면 상품 디테일페이지를 볼수없다. 다시 로그인 페이지가 보인다
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//9. 상품을 검색 할 수있다.
//json server 시작 명령어 : json-server --watch db.json --port 5000

function App() {
    const [authenticated, setAuthenticated] = useState(false)
    useEffect(() => {
        console.log('authenticated', authenticated)
    }, [authenticated]);


    return (
        <div>

            <NavigationBar authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            <Routes>
                <Route path="/" element={<ProductAll/>}/>
                <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>}/>
                <Route path="/product/:id" element={<PrivateRoute authenticated={authenticated}/>}/>
            </Routes>
        </div>
    );
}

export default App;
