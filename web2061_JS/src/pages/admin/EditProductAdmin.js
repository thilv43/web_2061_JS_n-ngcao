import { apiGet } from "../../api";
import Navbar from "../../components/Navbar";

const EditProductAdmin = {
    async render(param) {
        const books = await apiGet(`/books/${param.data.id}`);
        console.log(books);
        return /* html */`
        ${Navbar.render()}
        <div>
            <div>
            <form action="">
            <label for="">Tên sản phẩm</label>
            <input type="text" value=${books.name}>
            </form>
            <button>Cập nhận sản phẩm</button>
            </div>

        </div>
        `;
    },
};
export default EditProductAdmin;