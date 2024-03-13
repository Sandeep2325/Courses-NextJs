import Link from "next/link";
import React from "react";
import { Base_url } from "../config";
interface userData {
    id: number;
    first_name: String;

    email: String;
}
function Useritem({ id, first_name, email }: userData) {
    const userProfileUrl = "/chat/" + (id.toString())

    return (
        <Link href={userProfileUrl}>
            <p>{first_name}</p>
            <h6 className="text-blue-800 underline">
                {email}
            </h6>
        </Link>
    );
}

export default Useritem;
