import { AlertTriangleIcon } from 'lucide-react';

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive p-3 rounded-md flex items-center gap-x-2 text-sm text-white">
            <AlertTriangleIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
}
