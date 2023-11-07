export const checkSignInValid = (email, password) => {
    // /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Email ID is not valid";
    }
    if (!isPasswordValid) {
        return "Password is not valid";
    }

    return null;

}

export const checkSignUpValid = (name,email,password) => {
    const isNameValid = /^[a-zA-Z ]{8,30}$/.test(name);
    // /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNameValid) {
        return "Name is not valid";
    }

    if (!isEmailValid) {
        return "Email ID is not valid";
    }

    if (!isPasswordValid) {
        return "Password is not valid";
    }

    return null;
}