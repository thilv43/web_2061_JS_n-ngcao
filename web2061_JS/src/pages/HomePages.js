import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AsideLeft from "../components/AsideLeft";
import ListProducts from "../components/ListProducts";
import Header from "../components/Header";

const HomePages = {
    async render() {
        return /* html */`
            ${Header.render()}
            ${Navbar.render()}
            <section class="bg-[#efefef] py-5">
            <div class="max-w-[1240px] flex w-full m-auto bg-[#fff] rounded-l-sm">
            ${AsideLeft.render()}
            ${await ListProducts.render()}
            </div>
          </section>
            ${Footer.render()}
        `;
    },
};

export default HomePages;