import { Suspense } from "react";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center md:h-screen flex-col">
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    )
};

export default LoginPage;