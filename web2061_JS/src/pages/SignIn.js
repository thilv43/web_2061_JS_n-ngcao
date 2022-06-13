import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {$} from '../utils/common'
import {SignIn} from "../api/Auth";

const SignInPages = {
    render(){
        return /*html*/ `
        ${Header.render()}
        ${Navbar.render()}
        <div>
            <div class="alert"></div>
            <form class="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mt-10 mb-4 w-1/2 ml-96" id="formSignIn">
                <a href="/signup" class="block text-right" data-navigo>
                <button class="bg-gray-700 hover:bg-red-700 text-white w-26 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Quay lại
                </button>
                </a>
                <div class="mb-4 ml-48">
                <label class="block text-black text-xl font-bold mb-2" for="email">
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
                <button class="bg-blue-500 hover:bg-blue-700 text-white ml-64 mt-8 w-60 font-bold py-2 px-4 rounded" type="submit">
                Sign In 
                </button>
            </form>        
        </div>
        </div>
        ${Footer.render()}
        `;
    },
    afterRender(){
        const formSignIn =  document.querySelector('#formSignIn');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        formSignIn.addEventListener('submit', async function(e) {
            e.preventDefault()
            const {data} = await SignIn({
                email: email.value,
                password: password.value
            })
            localStorage.getItem('user', JSON.stringify(data.user))
            console.log(user);
        })
    }
}

export default SignInPages