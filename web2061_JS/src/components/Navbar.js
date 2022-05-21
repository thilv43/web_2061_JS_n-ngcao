const Navbar = {
    render() {
        return /* html */`
            <div>
                <ul>
                    <li>
                        <a href="/" data-navigo class="bg-red-500">HomePages</a>
                    </li>
                    <li><a href="/products" data-navigo>
                        ProductsPages
                    </a></li>
                </ul>
            </div>
        `;
    },
};

export default Navbar;