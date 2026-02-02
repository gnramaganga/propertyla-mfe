import MenuOne from "../../public/assets/img/menu/img-1.jpg";
import MenuTwo from "../../public/assets/img/menu/img-2.jpg";
import MenuThree from "../../public/assets/img/menu/img-3.jpg";
import MenuFour from "../../public/assets/img/menu/img-4.jpg";
import MenuFive from "../../public/assets/img/menu/img-5.jpg";

const menu_data_one = [
  {
    id: 1,
    label: "Buy",
    url: "/",
    //home_menu: true,
    //previewImg: true,
    submenu: [
      {
        id: 1,
        label: "Kuala Lumpur",
        url: "/",
        //img: MenuOne,
      },
      {
        id: 2,
        label: "Penang",
        url: "/home-two",
        //img: MenuTwo,
      },
      {
        id: 3,
        label: "Johor",
        url: "/home-three",
        //img: MenuThree,
      },
      {
        id: 4,
        label: "Ipoh",
        url: "/home-four",
        //img: MenuFour,
      },
      {
        id: 5,
        label: "Malacca",
        url: "/home-five",
        //img: MenuFive,
      },
    ],
  },
  {
    id: 2,
    label: "Rent",
    url: "/",
    //home_menu: true,
    //previewImg: true,
    submenu: [
      {
        id: 1,
        label: "Kuala Lumpur",
        url: "/",
        img: MenuOne,
      },
      {
        id: 2,
        label: "Penang",
        url: "/home-two",
        //img: MenuTwo,
      },
      {
        id: 3,
        label: "Johor",
        url: "/home-three",
        //img: MenuThree,
      },
      {
        id: 4,
        label: "Ipoh",
        url: "/home-four",
        //img: MenuFour,
      },
      {
        id: 5,
        label: "Malacca",
        url: "/home-five",
        //img: MenuFive,
      },
    ],
  },
  {
    id: 3,
    label: "New Projects",
    url: "/",
    //home_menu: true,
    //previewImg: true,
    submenu: [
      {
        id: 1,
        label: "Kuala Lumpur",
        url: "/",
        //img: MenuOne,
      },
      {
        id: 2,
        label: "Penang",
        url: "/home-two",
        //img: MenuTwo,
      },
      {
        id: 3,
        label: "Johor",
        url: "/home-three",
        //img: MenuThree,
      },
      {
        id: 4,
        label: "Ipoh",
        url: "/home-four",
        //img: MenuFour,
      },
      {
        id: 5,
        label: "Malacca",
        url: "/home-five",
        //img: MenuFive,
      },
    ],
  },

  {
    id: 4,
    label: "Dashboard",
    url: "/dashboard",
    submenu: [
      { id: 1, label: "Add New Listing", url: "/add-new-property" },
      { id: 2, label: "My Profile", url: "/dashboard/my-profile" },
      { id: 3, label: "My Properties", url: "/dashboard/property" },
      { id: 4, label: "Favourites", url: "/dashboard/favourite" },
      // { id: 5, label: "Reviews", url: "/dashboard/review" },
    ],
  },
  {
    id: 5,
    label: "More",
    url: "#",
    submenu: [
      { id: 1, label: "About", url: "/about" },
      // { id: 2, label: "Agency", url: "/agency" },
      // { id: 3, label: "Agency Details", url: "/agency-details" },
      { id: 4, label: "Faq", url: "/faq" },
      // { id: 5, label: "Pricing", url: "/pricing" },
      // { id: 6, label: "Agent", url: "/agent" },
      // { id: 7, label: "Agent Details", url: "/agent-details" },
      { id: 8, label: "Blog", url: "/blog" },
      // { id: 9, label: "Blog Details", url: "/blog-details" },
      // { id: 10, label: "Sign up", url: "/sign-up" },
      // { id: 11, label: "Sign In", url: "/sign-in" },
      // { id: 12, label: "Error", url: "/error" },
      { id: 13, label: "Contact", url: "/contact" },
    ],
  },
];

export default menu_data_one;
