import { getUser } from '@/services/users';
import { useSession as naUseSession } from 'next-auth/react';

export function useSession() {
    const naUserSession = naUseSession();

    const { data: session, update } = naUserSession;

    async function updateUserSession() {
        const { data: userFromDb } = await getUser();

        const sessionDataToUpdate = {
            ...session,
            user: userFromDb
        };

        await update(sessionDataToUpdate);
    }

    return { ...naUserSession, updateUserSession };
}

