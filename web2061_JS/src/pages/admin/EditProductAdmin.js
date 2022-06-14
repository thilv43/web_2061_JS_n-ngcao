import { apiGet, apiUpdate } from "../../api/index";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const EditProductAdmin = {
    render: async function(param) {
        const book = await apiGet(`/books/${param.data.id}`)
        console.log(book)
        return /*html*/`
        ${Header.render()}
            <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/BookEdit</h2>
                <div class="flex space-x-4">
                    <div class="flex-none w-1/3">
                        <div class="flex flex-col">
                            <label class="font-bold">Tên sản phẩm:</label>
                            <input id="name" class="w-full px-3 py-2 border border-primary" value="${book.name}">
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold">Giá sẩn phảm</label>
                            <input id="original_price" class="w-full px-3 py-2 border border-primary" value="${book.original_price}">
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold">Tên tác giả</label>
                            <input id="author" class="w-full px-3 py-2 border border-primary" value="${book.authors ? book.authors[0].name : ""}">
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold">Sao đánh giá</label>
                            <input id="rating_average" class="w-full px-3 py-2 border border-primary" value="${book.rating_average}">
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold">Danh mục sản phẩm</label>
                            <input id="category" class="w-full px-3 py-2 border border-primary" value="${book.categories.name}">
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold">Mô tả ngắn</label>
                            <input id="short_description" class="w-full px-3 py-2 border border-primary" value="${book.short_description}">
                            
                        </div>
                        <div class="flex flex-col">
                            <label class="font-bold">Mô tả dài</label>
                            <input id="description" class="w-full px-3 py-2 border border-primary" value="${book.description}">
                        </div>
                        <button class="text-[#fff] capitalize bg-red-600 border text-xl rounded-md p-2 w-68 mt-3" id="btn-update">Cập nhật sản phẩm</button>
                    </div>
                    <div class="grow grid grid-cols-3 gap-2">
                    ${book.images.map((image) => `
                        <img class="w-full max-w-[100px] h-[100px]  m-[10px]" src="${image.base_url}" >
                        `).join("")}
                    </div>
                </div>
            </div>
            ${Footer.render()}
        `
    },
    afterRender: async function(param) {
        const id = param.data.id
        const newData = await apiGet(`/books/${id}`)

        const updateBtn = document.querySelector('#btn-update');
        const name = document.querySelector('#name');
        const original_price = document.querySelector('#original_price');
        const author = document.querySelector('#author');
        const rating_average = document.querySelector('#rating_average');
        const category = document.querySelector('#category');
        const short_description = document.querySelector('#short_description')
        const description = document.querySelector('#description');

        updateBtn.addEventListener('click', function() {
            newData.name = name.value;
            newData.original_price = original_price.value;
            newData.authors.name = author.value;
            newData.rating_average = rating_average.value;
            newData.categories.name = category.value;
            newData.short_description = short_description.value;
            newData.description = description.value;

            apiUpdate(`/books/${id}`, newData)
            .then(res => {
                alert('Cập nhật dữ liệu thành công')
            })
            .catch(console.log)
            window.location.href = "/admin"
        })
    }
}

export default EditProductAdmin;