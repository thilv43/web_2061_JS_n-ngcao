const Footer = {
    render() {
        return /* html */ `
        <section class="flex py-6 max-w-[1240px] m-auto">
            <div class="max-w-[266px] w-full px-3">
                <h3 class="font-bold text-black text-lg capitalize">
                    Hỗ trợ khách hàng
                </h3>
                <div>
                    <span class="text-text128 text-xs"
                    >Hotline: <a class="text-black" href="">1900-6035</a> (1000 đ/phút,
                    8-21h kể cả T7, CN)</span
                    >
                </div>
                <div class="text-xs text-text128">
                    <ul>
                    <li class="my-[10px] capitalize">
                        <a href="">các câu hỏi thường gặp</a>
                    </li>
                    <li class="my-[10px] capitalize">
                        <a href="">hướng dẫn đặt hàng</a>
                    </li>
                    <li class="my-[10px] capitalize">
                        <a href="">phương thức vận chuyển</a>
                    </li>
                    <li class="my-[10px] capitalize">
                        <a href="">chính sách đổi trả</a>
                    </li>
                    <li class="my-[10px] capitalize">
                        <a href="">hướng dẫn trả góp</a>
                    </li>
                    </ul>
                </div>
            </div>
    
            <div class="max-w-[266px] w-full px-3">
            <h3 class="font-bold text-black text-lg capitalize">về tiki</h3>
            <div class="text-xs text-text128">
                <ul>
                <li class="my-[10px] capitalize">
                    <a href="">Giới thiệu Tiki</a>
                </li>
                <li class="my-[10px] capitalize">
                    <a href="">Tuyển dụng</a>
                </li>
                <li class="my-[10px] capitalize">
                    <a href="">Chính sách bảo mật thanh toán</a>
                </li>
                <li class="my-[10px] capitalize">
                    <a href="">Chính sách bảo mật thông tin cá nhân</a>
                </li>
                <li class="my-[10px] capitalize">
                    <a href="">Chính sách giải quyết khiếu nại</a>
                </li>
                <li class="my-[10px] capitalize">
                    <a href="">Tiếp thị liên kết cùng Tiki</a>
                </li>
                </ul>
            </div>
            </div>
    
            <div class="max-w-[266px] w-full px-3">
            <h3 class="font-bold text-black text-lg capitalize">về tiki</h3>
            <div class="text-xs text-text128">
                <ul>
                <li class="my-[10px] capitalize">
                    <a href="">Quy chế hoạt động Sàn GDTMĐT</a>
                </li>
                <li class="my-[10px] capitalize">
                    <a href="">Bán hàng cùng Tiki</a>
                </li>
                </ul>
            </div>
            </div>
    
            <div class="max-w-[266px] w-full px-3">
            <h3 class="font-bold text-black text-lg capitalize">
                phương thức thanh toán
            </h3>
            <div>
                <img class="max-w-[50px] mt-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX49/XrABv3nhv/XwDqAAD5///4/f/4+fn3mQD3lgD2ohz4+/n4+/z/YwD3mgD/WgDrABjrAA745tP42733vXv3sVzrABD3nBDwjI/6hRPxLhX5jBX7Uwr109Pzubr49O742rr438bvdnv3unPxlZj3yZjyqKn40Kf3pDX1ysrzOBP24uH47eH9bQr3RQ/sNT/3qUPtTVX8eA7uWWD3smD3w4n24N/0vb7wgYXsPUfypqjvbnPuVVzsIzD3ozDrFyb5khf4zaHxm577fQ72s5zuYmgpaAAYAAAFiElEQVR4nO2cbVPaTBSGA2Tz0g1BEIi1hQCKSOGpWgWsb622/v+/9IRAFJVActhNtjP39cEZmWGGa87uObub7NE0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtsEjUn3LjJD0q8TAOWNMm7aGs/ZsNpz6wX8JPE3TMQx/XOvud/a7tbFmGI6anoHd9OT6Ql/lZ++mFVhu+JZpOLVB/dyyrQjbbUw648Ays1+eCM74rFcNnJp7hRWa84+eT/wYSdPwB1eW5XpecRXPtWyvvs8VkuRseKvr1TdyrwSWd+01o9VxOg3bfSu3omnZR11DDUfOT+716nq7KJZ69Vhjb77laH3PitNbStoPA8fJyeoVzk6aekz0VtjT9QPtNY6ONrHcjXrLQHqDnMcqZ7NfCfxCdP1mOR9NY5DEL8R6yHWscv8yqV8Yx7PpfKgatVMrod8c+8rPbaiy9pb5956mfsC40bc3z7+PY7Vj5OLH+W2KAEZD9efoPE0Al2E8ymM2cv9eT+sXUP36+1Nqw6J76meuyKd6kyB4WC5VvhAUPXec8WRkw/QjNOBbuVQqVT4TFIt2LVPFXQTJit0MFXlrF0F6FDObi3xEEjyMBAPFLwTDojXOSJFrBYrg3qtgoPibYOgVsxHU2EW6Or+k9BZKEL3zTEo/O6DUwcLXd4b/Uaai1c9AMcgyFMFv5XeG6mYb/mvnSbhUJAgGSC8ZgsYoeZy6E8mKQaGgCB5+DCG1ZNiSSwZ7FpFHIyhB9K6kJhtRaSZKNqQgSk027FJkCBUMoshZqOZMZNckw0psDJVLp5y04m7GhZC4PC1a0mLI26QQfo8VLJV+kAw7shTFlgolc43YPEMfprYkPz4TPkhLlT8UQ6srZ5gSM+m6JekrSmVTdkY5PyxsGqTEHYa0nbD4aajWRKSuSTcKEtemlpS1qYRqOOcH6TRDSkXkxxISDTXV9GWkGtYj1fv4RemCMqnm16UY3pFS6RbBUoVk2JCRTKUUC6XKBbunbCzkGBYfpBiKOkYUYViE4T9vKGeUnqkzD71TKYYXcnKpQtXiVvwOfw7J8EhKxRf3xGIVhTaI/ESdlbc7kLLyHkrZPal0jOFL2QHTjr19GYJyCqJCBZ+cTDdvn2ibJympVFKqoSUaSYfeop887TINJR3rS9ghKrQ7nMOfhNd8Wr1/lPV4TfwwVWyQin/IrdyjJ+qyJjabKrWgWSD4rEahvWGE2HPvyh91zrtfEBpEBUNIn4lr3/oihdCWOQvnsDtx6ZQUQinnF6uIq4nK1cIIdiNoYUN7rDbI4EqCmNe8VR2jC+Luw27k3ZtRtKfbnpy9/XtEvIKp7lveIYxY91dulJAmod3J7F4Q2/GBd4W0abKzuIrworjTy0NEwUmmN0mpB+Dlf0UwUCTu98vUOfiY+V1gNiO9TvuduBrdz+GyM5sW0oexqf+NbRQRj1vM+o7sAm4+pw2jfjZi49SXue2r3Nq5BIUxTRir+jHjmpnyQr7r5nQdP4RrvcRNB/b0i9Gi+4czbiR29Oy6lm/3Dza9S+TY1O+HL21qTKN7uqWxSeTXGOcYwAWctS71bfOxqp/N3rThMY39861xdO2rmhItajgbXcc34Alb8Ny2PrQZMo3akb0hkJ7lTsZK+M0Jmyjpayz3mvM2Sm1tbRsl09A6YROlj3au5da7jkJtlLSwEVbr6bmw6IBVrVaXvbDujod8Qyss0zC7/YZrB56u63le8Ney7OLRY00xvQXzZmZaq31zcN3r9a4PntrDUYJ2ZmEvs1rncVIPmPQfOzXfUFIvYt6KjrGwU1uKnnSm6SxRvScdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACThf7hmn6bbQAXuAAAAAElFTkSuQmCC" alt="" />
            </div>
            <h3 class="font-medium text-black text-base capitalize mt-3">
                dịch vụ giao hàng
            </h3>
            <div>
                <img class="max-w-[60px] mt-2" src="https://salt.tikicdn.com/ts/brickv2og/1d/d4/27/c0e881ca1392ed3feff9cb5b6068d06d.png" alt="" />
            </div>
            </div>
    
            <div class="max-w-[266px] w-full px-3">
            <h3 class="font-bold text-black text-lg capitalize">
                kết nối với chúng tôi
            </h3>
            <div>
            <div class="flex justify-between items-center mt-3">
            <div>
            <img class="max-w-[50%]" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
            </div>
            <div class="flex flex-wrap">
            <img class="max-w-[50%] mb-2" src="https://www.youtube.com/img/desktop/yt_1200.png" alt="" />
            <img class="max-w-[70%]" src="src/image/playstore.png" alt="" />
            </div>
            </div>
            </div>
            </div>
        </section>
        `;
    },
};

export default Footer;