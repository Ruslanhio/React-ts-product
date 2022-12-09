import React from 'react';
interface IErrorProps {
    error: string
}
const ErrorMessage = ({error}: IErrorProps) => {
    return (
            <p className="text-center text-red-700">{error}</p>
    );
};

export default ErrorMessage;