import { useParams } from "react-router";

export default function Success() {
    const { email } = useParams();

    return (
        <div>
            <h1>Success, your email = {email}</h1>
            <p>Thank you for subscribing!</p>
        </div>
    );
}
    