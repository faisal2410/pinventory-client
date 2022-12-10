import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";

const { Header, Sider, Footer, Content } = Layout;
const { Item } = Menu;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <Layout>
      {/* {loading && (
        <div className="spinner">
          <div class="spinner-border" role="status"></div>
        </div>
      )} */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h3>{collapsed ? "PI" : "P-Inventory"}</h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <Item key="/cart" icon={<ShoppingCartOutlined />}>
            <Link to="/cart">Cart</Link>
          </Item>
          <Item key="/bills" icon={<CopyOutlined />}>
            <Link to="/bills">Bills</Link>
          </Item>
          <Item key="/items" icon={<UnorderedListOutlined />}>
            <Link to="/items">Items</Link>
          </Item>
          <Item key="/customers" icon={<UserOutlined />}>
            <Link to="/customers">Customers</Link>
          </Item>
          <Item
            key="/logout"
            icon={<LoginOutlined />}
            onClick={() => {
              localStorage.removeItem("pos-user");
              navigate("/login");
            }}
          >
            Logout
          </Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <div
            className="cart-count d-flex align-items-center"
            onClick={() => navigate("/cart")}
          >
            {/* <b>
              {" "}
              <p className="mt-3 mr-2">{cart.length}</p>
            </b> */}
            <ShoppingCartOutlined />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "10px",
            padding: 24,
            minHeight: "80vh",
          }}
        >
          <Outlet></Outlet>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          P-inventory ©2022 Created by Faisal ahmed
        </Footer>
      
      </Layout>
    </Layout>
  );
};

export default Navbar;
