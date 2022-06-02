const AsideLeft = {
    render() {
        return /* html */`
        <div class="max-w-[250px] w-full pt-3">
            <div class="mb-3">
                <div class="border-b-[1px] border-border-color">
                    <div class="pl-3 pb-2">
                    <h3 class="text-[17px] uppercase font-medium tracking-normal">
                        danh mục sản phẩm
                    </h3>
                    <ul class="block mt-2">
                        <li>
                        <a class="text-[#666] capitalize text-sm" href=""
                            >sách tiếng việt</a
                        >
                        </li>
                        <li>
                        <a class="text-[#666] capitalize text-sm" href=""
                            >quà lưu niệm</a
                        >
                        </li>
                        <li>
                        <a class="text-[#666] capitalize text-sm" href=""
                            >văn phòng thẩm</a
                        >
                        </li>
                        <li>
                        <a class="text-[#666] capitalize text-sm" href=""
                            >english books</a
                        >
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="border-b-[1px] border-border-color">
                <h3 class="pl-3 pb-2 uppercase font-medium tracking-normal">
                    địa chỉ nhận hàng
                </h3>
                <div class="pl-3 pb-2">
                    <a href="" class="capitalize text-text128 text-xs block"
                    >q.hoàn kiếm,p hàng trống, hà nội</a
                    >
                    <span class="capitalize text-base font-bold text-bg-search"
                    >đổi địa chỉ</span
                    >
                </div>  
            </div>
        </div>
        `;
    },
};

export default AsideLeft;