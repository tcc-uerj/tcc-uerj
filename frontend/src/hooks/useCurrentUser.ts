import { useSession } from "@/hooks/useSession";

export function useCurrentUser() {
    const session = useSession();
    return session.data?.user;
}