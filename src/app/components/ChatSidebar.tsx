import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { Base_url } from "../config";
import Useritem from "./Useritem";

function ChatSidebar() {
    const authToken = Cookies.get("auth_token");
    const [userList, setUserList] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        if (authToken) {
            axios
                .get(`${Base_url}users/`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                .then((res) => {
                    setUserList(res.data);
                    setLoader(false)

                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }, []);
    return (
        <div className="w-1/4 bg-gray-200 h-screen">
            <h2 className="text-lg font-semibold py-4 px-4 border-b">Users</h2>
            <div className="p-4">
                {/* List of users can be rendered here */}
                {/* Example: */}
                {loader ? (<p>{"Loading..."}</p>) : (
                    <div>
                        {userList.map((user: any) => (
                            <div key={user.id}>
                                <Useritem id={user.id} email={user.email} first_name={user.first_name}/>
                            </div>
                            
                        ))}
                    </div>


                )}

            </div>
        </div>
    );
}

export default ChatSidebar;
