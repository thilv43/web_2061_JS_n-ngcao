import { apiGet } from "../api";
import Header from "./Header";

const ListProducts = {
    async render() {
    const data = await apiGet("/books");
    const categorys = data.map((data) => data.categories.name);
    const category = categorys.reduce(
    (previousValue, item) =>
        previousValue.includes(item) ? previousValue : [...previousValue, item],
    []
    );
    return /*html*/`
        <section class="bg-[#efefef] py-5">
        <div class="max-w-[1240px] flex w-full m-auto bg-[#fff] rounded-l-sm">
        
        <div class="max-w-[250px] w-full pt-3">
            <div class="mb-3">
            <div class="border-b-[1px] border-border-color">
                <div class="pl-3 pb-2">
                <h3 class="text-[17px] uppercase font-medium tracking-normal mb-[10px] mt-[8px]">
                    danh mục sản phẩm
                </h3>
                <ul class="block mt-2 ">
                ${category.map((cate) => /*html*/`
                    <li class="mt-[10px]">
                    <button class="hover:text-primary-blue cursor-pointer text-[#666] capitalize text-sm" data-category="${cate}" id="btnCate">${cate}</button>
                    </li>
                    `).join("")}             
                </ul>
                </div>
            </div>
            </div>
            <div class="border-b-[1px] border-border-color">
            <h3 class="pl-3 pb-2 uppercase font-medium tracking-normal">
            địa chỉ nhận hàng
            </h3>
            <div class="pl-3 pb-2">
            <a href="" class="capitalize text-text128 text-xs block"
                >q.hoàn kiếm,p hàng trống, hà nội</a
            >
            <span class="capitalize text-base font-bold text-bg-search"
                >đổi địa chỉ</span
            >
            </div>
            </div>
        </div>
        <div class="w-full border-l-[1px] border-border-color">
        <div class="border-b-[1px] border-border-color pb-4 pt-2">
        <div>
            <h3 class="ml-4 text-[#565656] text-[24px] font-light capitalize">nhà sách tiki</h3>
        </div>
        <div class="mt-3">
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/99/b8/9a/13e0cf7163b2d66222cc317275f0c421.jpg" alt="" />
        </div>
        <div class="mt-3">
            <img src="src/image/banner.jpg" alt="" />
        </div>
        <div class="mt-5 pl-3">
                <ul>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    data-categories="sách tiếng việt"
                    >bán chạy</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    data-categories="tâm lý học"
                    >Phổ biến</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    >Giá thấp</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    >Giá cao</button
                    >
                </li>
                </ul>
            </div>

            
        </div>
        <div class="flex flex-wrap" id="listProduct">
            ${data.map((item) => {
                if (!item.isHidden) {
                return/*html*/`
                <a href="products/${item.id}" data-navigo>
                <div class="max-w-[245px] w-full p-4 hover:shadow-2xl transition-all mb-6">
                <div>
                    <img class="w-full items-center" src="${item.images[0].base_url}" alt=""/>
                </div>
                <div class="mt-3 px-4">
                    <h3 class="text-[13px] capitalize text-[rgb(36, 36, 36)] font-normal">${item.name}</h3>
                <div class="text-yellow">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <span class="text-black mt-3">${item.list_price.toLocaleString("vi",{ style: "currency", currency: "VND" })}</span>
                </div>
                </div>
                </a>
                `;}
                }).join("")}
        </div>
    </div>
    </div>
    </section>
    `;
    },
    async afterRender() {
    const data = await apiGet("/books");
    const cates = document.querySelectorAll("#btnCate");
    const listProduct = document.getElementById("listProduct");
    cates.forEach((cate) =>
    cate.addEventListener("click", function () {
        const attributeCate = this.getAttribute("data-category");
        const result = data.filter((item) => item.categories.name == attributeCate);
        const html = result.map((item) => /*html*/`
        <a href="products/${item.id}" data-navigo>
        <div class="max-w-[245px] w-full p-4 hover:shadow-2xl transition-all mb-6">
        <div>
        <img class="w-full items-center" src="${item.images[0].base_url}"alt=""/>
        </div>
        <div class="mt-3 px-4">
        <h3 class="text-[13px] capitalize text-[rgb(36, 36, 36)] font-normal">${item.name}</h3>
        <div class="text-yellow">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <span class="text-black mt-3">${item.list_price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        })}</span>
        </div>
    </div>
    </a>
        `).join("");
        console.log(html);
        listProduct.innerHTML = html;
    })
    );
    },
};

export default ListProducts;
