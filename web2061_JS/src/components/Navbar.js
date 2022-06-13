const Navbar = {
    render() {
        return /* html */`
        <section class="contaienr bg-[#1982C4]">
            <div class="w-full max-w-[1240px] m-auto py-4">
                <ul class="flex items-center">
                    <li class="mr-4">
                    <a
                        class="capitalize text-white text-base hover:text-[#777] transition-all"
                        data-navigo
                        href="/"
                        >trang chủ</a
                    >
                    </li>
                    <li class="mr-4">
                    <a
                        class="capitalize text-white text-base hover:text-[#777] transition-all"
                        href="/"
                        data-navigo
                        >nhà sách</a
                    >
                    </li>
                    <li class="mr-4">
                    <a
                        class="capitalize text-white text-base hover:text-[#777] transition-all"
                        data-navigo
                        href="/"
                        >thịt rau củ</a
                    >
                    </li>
                    <li class="mr-4">
                    <a
                        class="capitalize text-white text-base hover:text-[#777] transition-all"
                        data-navigo
                        href="/admin"
                        >admin</a
                    >
                    </li>
                </ul>
            </div>
        </section>
        `;
    },
};

export default Navbar;