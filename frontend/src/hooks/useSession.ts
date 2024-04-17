import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export function useSession() {
    const value = useContext(AuthContext);
    return value;
}