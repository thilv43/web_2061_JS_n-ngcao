import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePages = {
    render() {
        return /* html */`
        
            ${Navbar.render()}
            <div class="">HomePages</div>
            ${Footer.render()}
        `;
    },
};

export default HomePages;