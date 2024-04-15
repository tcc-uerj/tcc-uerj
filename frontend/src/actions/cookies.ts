'use server'
import { cookies } from "next/headers";

export async function getCookie(name: string) {
    return cookies().get(name)?.value;
}

export async function setCookie(name: string, value: string) {
    cookies().set({
        name,
        value,
        httpOnly: true,
        path: '/'
    });
}

export async function deleteCookie(name: string) {
    cookies().set(name, '')
}