import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {$} from '../utils/common'

const SignUp = {
    render() {
        return /*html*/`
            ${Header.render()}
            ${Navbar.render()}
            <div>
                <form class="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4 w-1/2 ml-96" id="formSignUp">
                    <div class="mb-4 ml-48">
                    <label class="block text-black text-xl font-bold mb-2" for="username">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
                    </div>
                    <div class="mb-6 ml-48">
                    <label class="block text-black text-xl font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
                    </div>
                    <div class="flex items-center justify-between mx-48">
                
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signin" data-navigo>
                    Do you already have an account?
                    </a>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white ml-64 mt-8 w-60 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign Up
                    </button>
                </form>
            </div>
            ${Footer.render()}
        `;
    },
    afterRender(){
        const formSignUp = document.querySelector('#formSignUp');
        console.log(formSignUp);
        formSignUp.addEventListener('submit', async function(e){
            e.preventDefault();
            const user = {
                username: $('#username').value,
                email: $('#email').value,
                password: $('#password').value
            };
            console.log(user)
            const result = await SignUp(user);
            if(result){

            }
        });
    }
}

export default SignUp