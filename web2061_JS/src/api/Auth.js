import Instance from "./Instance";

export const SignIn = (user) => {
    return Instance.post(`/signin`, user);
};
export const SignUp = (user) => {
    return Instance.post("/signup", user);
};
