import Navigo from "navigo";
import HomePages from "./pages/HomePages";
import ProductsDetail from "./pages/ProducsDetail";
import AdminProducts from "./pages/admin/AdminProducts";
import DetailProductAdmin from "./pages/admin/DetailProductAdmin";
import EditProductAdmin from "./pages/admin/EditProductAdmin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ListProducts from "./components/ListProducts";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (pages, param) => {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = await pages.render(param);
    }
    if(pages.afterRender) pages.afterRender(param); await ListProducts.afterRender()
};
router.on({
    "/": () => print(HomePages),
    "/products/:id": (param) => print(ProductsDetail, param),
    "/signin": () => print(SignIn),
    "/signup": () => print(SignUp),
    "/admin": () => print(AdminProducts),
    "/admin/products/:id": (param) => print(DetailProductAdmin, param),
    "/admin/products/:id/edit": (param) => print(EditProductAdmin, param),

});
router.resolve();

// // Get image into img tag
// getImage("https://picsum.photos/300/200", (data) => {
//     // console.log(data)
//     document.querySelector("#img-01").src = data.url;
// });

// getImage("https://picsum.photos/300/200", (data) => {
//     // console.log(data)
//     document.querySelector("#img-02").src = data.url;
// });

// getImage("https://picsum.photos/300/200", (data) => {
//     // console.log(data)
//     document.querySelector("#img-03").src = data.url;
// });
// function loading() {
//     setTimeout(() => {
//         getImage("https://picsum.photos/300/200", (data) => {
//             // console.log(data)
//             document.querySelector("#img-01").src = data.url;
//         });
//         setTimeout(() => {
//             getImage("https://picsum.photos/300/200", (data) => {
//                 // console.log(data)
//                 document.querySelector("#img-02").src = data.url;
//             });
//             setTimeout(() => {
//                 getImage("https://picsum.photos/300/200", (data) => {
//                     // console.log(data)
//                     document.querySelector("#img-03").src = data.url;
//                 });
//             }, 3000);
//         }, 2000);
//     }, 1000);
// }
// loading();
// eslint-disable-next-line no-use-before-define
// const Promise = new Promise((res, rej) => {
//     res("kakakaaaaaaaaaaa");
// });
// Promise
//     .then((data) => console.log("cuoi len di", data));