const Navbar = {
    render() {
        return /* html */`
        <!--<section class="contaienr bg-[#1982C4]">
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
                        href="/products"
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
                        href="/"
                        >làm đẹp</a
                    >
                    </li>
                </ul>
            </div>
        </section>-->

        <div class="">
                <div class="text-center flex justify-center items-center h-24">
                    <div class="ml-24">
                        <a data-navigo>
                            <img src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg" alt="" class="w-[25%]"/>
                        </a>
                    </div>
                    <div class="mr-72 w-4/5">
                        <form action="#" method="POST">
                            <input type="text" class="mr- p-[7px] w-[300px] rounded-md border-[1px] border-red-600 text-black" placeholder="Search...">
                            <input type="submit" data-navigo value="Search" class="bg-[#333366] text-base mr-[30px] rounded-md p-[7px] w-[70px] text-[#fff]">
                        </form>
                    </div>
                    <div class="flex mr-10">
                        <a href="/signin">
                            <button class="bg-[#0253a4] text-base mr-[7px] p-[6px] w-[80px] text-[#fff] rounded-md hover:bg-[#012a4a]">Add To Cart</button>
                        </a>
                        <a href="/login">
                            <button class="bg-[#e63946] text-base mr-[10px] p-[6px] w-[70px] text-[#fff] rounded-md hover:bg-[#d90429]">Sign In</button>
                        </a>
                    </div>

                </div>
                <div class="bg-[#cc6600] flex justify-center items-center h-16">
                    <ul class="flex">
                        <li><a class="p-[20px] text-[#fff] text-xl hover:bg-[#F8F9FA] hover:text-[#000] hover:border hover:py-[7px] hover:rounded-3xl hover:border-gray-500" data-navigo href="/">Home</a></li>
                        <li><a class="p-[20px] text-[#fff] text-xl hover:bg-[#F8F9FA] hover:text-[#000] hover:border hover:py-[7px] hover:rounded-3xl hover:border-gray-500" data-navigo href="/products">Products</a></li>
                        <li><a class="p-[20px] text-[#fff] text-xl hover:bg-[#F8F9FA] hover:text-[#000] hover:border hover:py-[7px] hover:rounded-3xl hover:border-gray-500" data-navigo href="">About</a></li>
                        <li><a class="p-[20px] text-[#fff] text-xl hover:bg-[#F8F9FA] hover:text-[#000] hover:border hover:py-[7px] hover:rounded-3xl hover:border-gray-500" data-navigo href="">News</a></li>
                        <li><a class="p-[20px] text-[#fff] text-xl hover:bg-[#F8F9FA] hover:text-[#000] hover:border hover:py-[7px] hover:rounded-3xl hover:border-gray-500" data-navigo href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        `;
    },
};

export default Navbar;