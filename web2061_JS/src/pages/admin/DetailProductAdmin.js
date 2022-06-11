import Navbar from "../../components/Navbar";
import { apiGet } from "../../api/index";

const DetailProductAdmin = {
    async render(param) {
        const data = await apiGet(`/books/${param.data.id}`);
        return /* html */`
        ${Navbar.render()}
        <div class="m-10 ">
        <a href="#" class="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700">
            <div>
                <div>
                <img src="${data.images[0].base_url}" alt="" width=100%>
                </div>
                <div class="flex">
                <div class="flex justify-center">
                ${data.images.map((items) => `
                <img src="${items.base_url}" alt="" width=30%>
                `).join("")}
                </div>
            </div>
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
            <span>Tác giả: ${data.authors ? data.authors[0].name : ""}</span>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${data.name}</h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 ">${data.list_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5>
            <p class="mb-3 font-normal text-gray-700 ">${data.short_description}</p>
            <button class="border border-red-500 bg-red-500 text-white p-2 text-xl rounded-md">Chọn mua</button>
            </div>
        </a>
    </div>
    <div>
        <h2>Thông tin chi tiết</h2>
        ${data.specifications[0].attributes.map((attribute) => /* html */`
        <table>
        <thead>
            <tr>
                <th>${attribute.name}</th>
                
                <td>${attribute.value}</td>
            </tr>
        </thead>
    </table>
        `).join("")}
    </div>
    <div>
        <h2>Mô tả sản phẩm</h2>
        <div>
            <span>${data.description}</span>
        </div>

    </div>

        `;
    },
};

export default DetailProductAdmin;