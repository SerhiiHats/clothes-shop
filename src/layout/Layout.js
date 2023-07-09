import React from 'react';
import {Outlet} from "react-router";
import "./Layout.scss"
import {Link, NavLink} from "react-router-dom";
import CartShopping from "../companents/CartShopping/CartShopping";

const Layout = () => {
  return (
    <>
      <header className={"header"}>
        <Link to={"/"}><h1>Clothes shop</h1></Link>
        <nav>
          <NavLink to={"/contacts"}><div className={"contact"}>Контакти</div></NavLink>
          <div className={"wrapCart"}><CartShopping/></div>
        </nav>

      </header>
      <div className={"containerMain"}>
        <nav className={"nav"}>
          <NavLink to={"/"}><p>Каталог товарів</p></NavLink>
          <NavLink to={"/product/for_men"} state={{items:"men's clothing"}} ><p>Чоловічій одяг</p></NavLink>
          <NavLink to={"/product/for_women"} state={{items:"women's clothing"}} ><p>Жіночій одяг</p></NavLink>
          <NavLink to={"/product/jewelery"} state={{items:"jewelery"}} ><p>Прикраси</p></NavLink>
          <NavLink to={"/product/electronics"} state={{items:"electronics"}}><p>Техніка</p></NavLink>
        </nav>
        <main className={"main"}>
          <Outlet/>
        </main>
      </div>
      <footer className={"footer"}>2023 - footer - Clothes shop</footer>
    </>
  );
};

export default Layout;