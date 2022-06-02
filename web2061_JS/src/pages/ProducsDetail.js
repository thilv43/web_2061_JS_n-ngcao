import { apiGet } from "../api";
import AsideLeft from "../components/AsideLeft";
import Navbar from "../components/Navbar";

const Detail = {

    async render(param) {
        const book = await apiGet(`/books/${param.data.id}`);99
        console.log(book);
        return /* html */`
        ${Navbar.render()}
        <section class="bg-[rgb(239,239,239)] py-5">
        <div class="max-w-[1240px] flex w-full m-auto bg-[#fff] rounded-l-sm">
        ${AsideLeft.render()}
        <div class="w-full border-l-[1px] border-border-color">
        <div class="border-b-[1px] border-border-color pb-4 pt-2">
        <div>
            <h3 class="ml-4 text-[#565656] text-[24px] font-light capitalize">
            nhà sách tiki
            </h3>
        </div>

        <div class="mt-3">
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/99/b8/9a/13e0cf7163b2d66222cc317275f0c421.jpg" alt="" />
        </div>

        <div class="mt-5 pl-3">
            <ul>
            <li class="inline-block mr-[20px]">
                <a
                class="text-[#565656] font-normal capitalize text-lg hover:text-bg-search hover:text-[#003F88] hover:border-b-4 hover:border-[#003F88] hover:py-4"
                data-navigo
                href=""
                >Sách tiếng việt</a
                >
            </li>
            <li class="inline-block mr-[20px]">
                <a
                class="text-[#565656] font-normal capitalize text-lg hover:text-bg-search hover:text-[#003F88] hover:border-b-4 hover:border-[#003F88] hover:py-4"
                data-navigo
                href=""
                >Tâm lý học</a
                >
            </li>
            <li class="inline-block mr-[20px]">
                <a
                class="text-[#565656] font-normal capitalize text-lg hover:text-bg-search hover:text-[#003F88] hover:border-b-4 hover:border-[#003F88] hover:py-4"
                data-navigo
                href=""
                >Sách anh ngữ</a
                >
            </li>
            <li class="inline-block mr-[20px]">
                <a
                class="text-[#565656] font-normal capitalize text-lg hover:text-bg-search hover:text-[#003F88] hover:border-b-4 hover:border-[#003F88] hover:py-4"
                data-navigo
                href=""
                >Văn Phòng Phẩm</a
                >
            </li>
            <li class="inline-block mr-[20px]">
                <a
                class="text-[#565656] font-normal capitalize text-lg hover:text-bg-search hover:text-[#003F88] hover:border-b-4 hover:border-[#003F88] hover:py-4"
                data-navigo
                href=""
                >Máy tính bỏ túi</a
                >
            </li>
            </ul>
        </div>
        </div>
        <div class="grid grid-cols-4 gap-3">
                <div class="w-full p-4 hover:shadow-2xl transition-all mb-6">
                <div>
                    <img class="block w-full items-center" src="${book.image}" alt="" />
                </div>
                <div class="mt-3 px-4">
                    <h3
                    class="blocl text-[13px] capitalize text-[rgb(36, 36, 36)] font-normal"
                    >
                    ${book.title}
                    </h3>
                    <div class="text-yellow">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="text-[#EF233C] text-xl mt-3">${book.price} đ</span>
                </div>
                </div>
        </div>
    </div>
    </div>
    </section>
        `;
    },
    afterRender() {
    },
};

export default Detail;