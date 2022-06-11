import { apiGet } from "../api";

const ListProducts = {
    async render() {
        const data = await apiGet("/books");
        return /* html */`
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
            ${data.map((item) => /* html */`
            <a href="/products/${item.id}" data-navigo>
                    <div
                    class="w-full p-4 hover:shadow-2xl transition-all mb-6"
                    >
                    <div>
                        <img class="block items-center w-[100%]" src="${item.images[0].base_url}" alt="" />
                    </div>
                    <div class="mt-3 px-4">
                        <h3
                        class="blocl text-[13px] capitalize text-[rgb(36, 36, 36)] font-normal"
                        >
                        ${item.name}
                        </h3>
                        <div class="text-[#ffb703]">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="text-[#EF233C] text-xl mt-3">${item.list_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    </div>
                    </div>
                </a>
            `).join("")}
            </div>
        </div>
        `;
    },
};

export default ListProducts;