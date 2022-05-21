import Navigo from "navigo";
import HomePages from "./pages/HomePages";
import ProductsPages from "./pages/ProductsPages";

const router = new Navigo("/");
const print = (pages) => {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = pages.render();
    }
};
router.on({
    "/": () => print(HomePages),
    "/products": () => print(ProductsPages),

});
router.resolve();