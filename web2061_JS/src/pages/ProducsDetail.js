import { apiGet } from "../api";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const Detail = {

    async render(param) {
        const data = await apiGet(`/books/${param.data.id}`);
        return /* html */`
        ${Header.render()}
        ${Navbar.render()}
        <section class="bg-[#efefef] py-5">
            <div class="max-w-[1240px] w-full rounded-md m-auto bg-[#fff] flex">
            <div class="max-w-[460px] border-r-[1px] border-border-color w-full p-5">
            <div>
            <img class="w-full cursor-pointer" src="${data.images[0].base_url}" id="imgSetSrc" alt="" />
            </div>
            <div class="flex mt-[20px] w-full">
            ${data.images.map((image) => `
                <img class="mr-[20px] w-[80px] cursor-pointer" id="imgSrc" src="${image.base_url}" alt="" />
                `).join("")}
                </div>
            </div>
            <div class="w-full pt-5 pl-5">
            <div>
                <!--  -->
                <div>
                <div>
                <span class="capitalize text-lg font-normal">tác giả: <a class="text-blue-500" href="">${data.authors ? data.authors[0].name : ""}</a></span>
                <span class="ml-3 text-lg text-[#000]">Đứng thứ 13 trong <span class="text-blue-700 text-lg">Tóp 1000 Sách tu duy - Kỹ năng sống bán chạy tháng này</span></span>
                </div>
                <h3 class="font-normal text-[30px] max-w-[500px]">${data.name}</h3>
                <div class="text-yellow text-xs">
                    <span class="text-[18px] font-medium">${data.rating_average }</span>
                <i class="text-[15px] fa-solid fa-star ml-[1px]"></i>
                <i class="text-[15px] fa-solid fa-star ml-[1px]"></i>
                <i class="text-[15px] fa-solid fa-star ml-[1px]"></i>
                <i class="text-[15px] fa-solid fa-star ml-[1px]"></i>
                <i class="text-[15px] fa-solid fa-star ml-[1px]"></i>
                <span class="text-lg font-normal ml-4 text-[#787878]">(Xem 2942 đánh giá )<span class="text-[#787878] text-lg font-normal ml-4">|</span></span>
                <span class="ml-4 text-lg capitalize text-[#787878]">(đã bán ${data.quantity_sold ? data.quantity_sold.text : ""})</span>
                </div>
                </div>
                <div class="max-w-[479px] p-5 w-full bg-bg-price mt-3 flex items-center">
                <h3 class="text-[#ff424e] text-5xl font-normal mb-6">${data.original_price}<span class="underline decoration-1">đ</span></h3>
                <h3 class="text-[#787878] font-normal ml-5 text-lg">${data.list_price} đ</h3>
                <button class="border border-[#ff424e] text-center font-mendium ml-5 rounded-md p-1 w-[60px] text-lg bg-red-200 text-[#ff424e]">-23%</button>
                </div>
                <div>
                    <span class="block text-black text-lg font-medium">15 Mã Giảm Giá</span>
                    <div>
                    <button class="border-2 border-[#0D5CB6] w-[100px] h-[30px] font-medium text-[#0D5CB6] text-base rounded-md">Giảm giá 10K</button>
                    <button class="border-2 border-[#0D5CB6] w-[100px] h-[30px] font-medium text-[#0D5CB6] text-base rounded-md ml-3">Giảm giá 20K</button>
                    <button class="border-2 border-[#0D5CB6] w-[100px] h-[30px] font-medium text-[#0D5CB6] text-base rounded-md ml-3">Giảm giá 30K</button>
                    <button class="font-medium text-[#0D5CB6] text-3xl">></button>
                    </div>
                </div>
                <div class="flex">
                <span class="flex text-black text-lg mt-10">Giao đến Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội </span>
                <a href="" class="flex text-blue-500 text-lg font-normal mt-10 ml-5">Đổi địa chỉ</a>
                </div>
                <div class="max-w-[550px] mt-5 text-text128">
                <span>${data.short_description}</span>
                </div>
                <div>
                <div class="mt-10">
                    <h3 class="capitalize mb-3">số lượng</h3>
                <div class="border-[1px] max-w-[120px] flex items-center justify-around">
                    <i class="fa-solid fa-plus cursor-pointer"></i>
                    <input type="text" class="max-w-[70px] pl-8" value="1" />
                    <i class="fa-solid fa-minus cursor-pointer"></i>
                  </div>
                  <div class="cursor-pointer mt-5 w-full max-w-[350px] py-4 bg-red-button rounded-md hover:bg-opacity-90 mb-[20px]">
                    <button class="text-[#fff] capitalize bg-red-600 border text-xl rounded-md p-4 w-80">Chọn mua</button>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
      </section>
      <section class="max-text-[#4F4F4F] leading-[21px] font-normal w-[1240px] m-auto">
      <div class="max-text-[#4F4F4F] leading-[21px] font-normal w-[920px] p-[10px]">
        <div>
          <h3 class="text-[19px] leading-[32px] text-[#333333] capitalize">
            ${data.specifications[0].name}
          </h3>
        </div>
        <div class="mt-[15px] text-[13px]">
          <table class="table text-[#4F4F4F] leading-[21px] font-normal w-full text-sm text-left">
            <tbody class="text-xs text-gray-700 uppercase bg-gray-50 ">
            ${data.specifications[0].attributes
                .map((attribute) => `
                    <tr class="hover:bg-slate-400">
                    <td class=" w-[300px] p-[10px] text-[#242424] text-lg font-normal leading-[21px] bg-[#EFEFEF] hover:bg-slate-400">
                        ${attribute.name}
                    </td>
                    <td class="p-[10px] text-[#242424] font-normal text-lg leading-[21px]">
                        ${attribute.value}
                    </td>
                    </tr>
                    `).join("")}
            
            </tbody>
            </table>
        </div>
        <div class="mt-[43px]">
            <h3
                class="text-[#333333] text-[20px] leading-[32px] font-normal capitalize">Mô Tả Sản Phẩm
            </h3>
            <div class="mt-[11px]">
                <span class="text-[#242424] text-[14px] leading-[21px] font-normal">
                ${data.description}
                </span>
            </div>
            </div>
        </div>
        </section>
        ${Footer.render()}
        `;
    },
};

export default Detail;