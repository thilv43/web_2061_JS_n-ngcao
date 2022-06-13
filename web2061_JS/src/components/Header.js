const Header = {
    render() {
        return /* html */ `
        <section class="w-full bg-blue-500">
            <div class="flex justify-between items-center py-4 max-w-[1240px] m-auto">
            <div>
                <a href="/" data-navigo>
                <img class="max-w-[70px]" src="src/image/logo.png" alt="" />
                <img
                    class="max-w-[70px] mt-2"
                    src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                    alt=""
                />
                </a>
            </div>
            <div class="w-full flex justify-center items-center">
                <label class="relative flex max-w-[746px] w-[100%] justify-end">
                <input
                    class="max-w-[626px] placeholder:italic placeholder:text-sm outline-none block  w-full py-3 pl-9 pr-3 shadow-sm sm:text-sm"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                />
                <span
                    class="bg-bg-search px-5 flex content-center items-center text-[#fff] cursor-pointer hover:bg-opacity-80 border-2 border-bg-search"
                    >Search</span
                >
                </label>
            </div>
            <div class="flex max-w-[250px] w-full justify-between">
                <div class="flex items-center">
                <div>
                    <img
                    class="max-w-[30px] mr-3 text-[#fff]"
                    src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                    alt=""
                    />
                </div>
                <div>
                    <div>
                    <div>
                    <a href="/signup" data-navigo>
                        <p class="text-[#fff] text-xs capitalize">
                        đăng nhập</p><p class="text-[#fff] text-xs capitalize">đăng ký</p>
                    </a>
                    </div>
                    <div class="flex items-center justify-start">
                    <p class="text-[#fff] capitalize">
                        tài khoản
                    </p>
                    </div>
                </div>
                </div>
                <div class="flex items-center ml-4">
                <img class="max-w-[30px] mr-2" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" />
                <p class="text-[#fff] capitalize text-xs">giỏ hàng</p>
                </div>
            </div>
            </div>
        </section>
        `;
    },
};

export default Header;