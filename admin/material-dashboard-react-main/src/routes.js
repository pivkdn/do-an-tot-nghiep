import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Users from 'layouts/users'
import UserEdit from 'layouts/users/Edit'
import ProductEdit from "layouts/products/Edit";
import ProductNew from "layouts/products/New";
import Products from 'layouts/products'
import Orders from 'layouts/orders'
import Payment from 'layouts/payment'
import Basic from "layouts/authentication/sign-in";
import Cover from "layouts/authentication/sign-up";
// @mui icons
import Icon from "@mui/material/Icon";
import Overview from 'layouts/profile'
const routes = [
  {
    type: "collapse",
    name: "Bảng điều khiển",
    key: "dashboard",
    show: true,
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Quản lý tài khoản",
    key: "users",
    show: true,
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "collapse",
    name: "Quản lý hàng hoá",
    key: "products",
    show: true,
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/products",
    component: <Products />,
  },
  {
    type: "collapse",
    name: "Quản lý ship hàng",
    key: "order",
    show: true,
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/order",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "Quản lý nạp tiền",
    key: "money",
    show: true,
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/money",
    component: <Payment />,
  },
  {
    type: "collapse",
    key: "money",
    show: false,
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/login",
    component: <Basic />,
  },
  {
    type: "collapse",
    key: "register",
    show: false,
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/register",
    component: <Cover />,
  },
  {
    type: "collapse",
    key: "users_edit",
    show: false,
    icon: <Icon fontSize="small">Edit</Icon>,
    route: "/users/edit/:id",
    component: <UserEdit />,
  },
  {
    type: "collapse",
    key: "users_edit",
    show: false,
    icon: <Icon fontSize="small">New</Icon>,
    route: "/users/new",
    component: <Overview />,
  },
  {
    type: "collapse",
    key: "product_edit",
    show: false,
    icon: <Icon fontSize="small">new</Icon>,
    route: "/products/new",
    component: <ProductNew />,
  },
  {
    type: "collapse",
    key: "products_edit",
    show: false,
    icon: <Icon fontSize="small">Edit</Icon>,
    route: "/products/edit/:id",
    component: <ProductEdit />,
  },
];

export default routes;
