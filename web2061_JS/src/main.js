import Navigo from "navigo";
import HomePages from "./pages/HomePages";
import ProductsPages from "./pages/ProductsPages";
import ProductsDetail from "./pages/ProducsDetail";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (pages, param) => {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = await pages.render(param);
    }
    if (app) {
        app.innerHTML = await pages.afterRender();
    }
};
router.on({
    "/": () => print(HomePages),
    "/products": () => print(ProductsPages),
    "/products/:id": (param) => print(ProductsDetail, param),
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