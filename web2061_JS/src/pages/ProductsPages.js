import AsideLeft from "../components/AsideLeft";
import Footer from "../components/Footer";
import ListProducts from "../components/ListProducts";
import Navbar from "../components/Navbar";

const ProductsPages = {
    async render() {
        return /* html */`
            ${Navbar.render()}
            <section class="bg-[rgb(239,239,239)] py-5">
            <div class="max-w-[1240px] flex w-full m-auto bg-[#fff] rounded-l-sm">
            ${AsideLeft.render()}
            ${await ListProducts.render()}
            </div>
          </section>
            ${Footer.render()}
        `;
    },
};

export default ProductsPages;