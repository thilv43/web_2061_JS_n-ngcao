import Navbar from "../components/Navbar";
import {$} from '../utils/common'

const SignUp = {
    render() {
        return /*html*/`
            ${Navbar.render()}
            <div>
                <h1>Đăng ký</h1>
                <form id="formSignUp">
                    <input type="email" id="email" />
                    <input type="password" id="password" />
                    <button>Đăng ký</button>
                </form>            
            </div>
        `;
    },
    afterRender(){
        const formSignUp = document.querySelector('#formSignUp');
        formSignUp.addEventListener('submit', async function(e){
            e.preventDefault();
            const user = {
                email: $('#email').value,
                password: $('#password').value
            };
            const result = await SignUp(user);
            if(result){

            }
        });
    }
}

export default SignUp