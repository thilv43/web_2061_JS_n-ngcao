import {$} from '../utils/common'

const SignIn = {
    render(){
        return /*html*/ `
        <div>
            <h1>Đăng nhập</h1>
            <div class="alert"></div>
            <form id="formSignIn">
            <input type="email" id="email" />
            <input type="password" id="password" />
            <button>Đăng ký</button>
            </form>
        </div>
        `;
    },
    afterRender(){
        const formSignIn = document.querySelector('#formSignIn');
        formSignIn.addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const user = {
                    email: $('#email').value,
                    password: $('#password').value
                }
                const result = await SignIn(user);
                if(result){
                    $('#email').innerHTML = result.user.email;
                }
                localStorage.setItem('user', JSON.stringify(result.user));
                $('.alert').classList.remove('alert-danger');
                $('.alert').classList.add('alert-success');
                $('.alert').innerHTML = `Thành cmn công`;
            } catch (error) {
                $('.alert').classList.add('alert-danger');
                $('.alert').innerHTML = error.response.data;
            }
        })
    }
}

export default SignIn