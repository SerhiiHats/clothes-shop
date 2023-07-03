import './App.css';
import {Route, Routes} from "react-router";
import Layout from "../../layout/Layout";
import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";
import Contacts from "../../pages/Contacts";
import SingleProductPage from "../../pages/SingleProductPage";
import NotfoundPage from "../../pages/NotfoundPage";
import ErrorPage from "../../pages/ErrorPage";
import Auth from "../Auth/Auth";
import RequireAuth from "../hoc/requireAuth";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={"/product/:id"} element={<SingleProductPage/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={"/product/for_men"} element={
          <RequireAuth>
            <ProductPage/>
          </RequireAuth>
        }/>
        <Route path={"/product/for_women"} element={
          <RequireAuth>
            <ProductPage/>
          </RequireAuth>
        }/>
        <Route path={"/product/jewelery"} element={
          <RequireAuth>
            <ProductPage/>
          </RequireAuth>
        }/>
        <Route path={"/product/electronics"} element={
          <RequireAuth>
            <ProductPage/>
          </RequireAuth>
        }/>
        <Route path={"*"} element={<NotfoundPage/>}/>
        <Route path={"/error"} element={<ErrorPage/>}/>
        <Route path={"/auth"} element={<Auth/>}/>
      </Route>
    </Routes>
  );
}

export default App;
