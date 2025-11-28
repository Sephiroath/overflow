'use client'

import {User} from "next-auth";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/dropdown";
import {Avatar} from "@heroui/avatar";
import {signOut} from "next-auth/react";

type props = {
    user: User
}

export default function UserMenu({user}: props) {
    return (
        <Dropdown>
            <DropdownTrigger>
                <div className="flex gap-2 items-center cursor-pointer">
                    <Avatar color="secondary" size="sm" name={user.name?.charAt(0)} />
                    {user.name}
                </div>
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem key="edit" >Edit Profile</DropdownItem>
                <DropdownItem
                    key="logout"
                    className="text-danger"
                    color="danger"
                    onClick={() => signOut({redirectTo: "/"})}
                >
                    Sign out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}