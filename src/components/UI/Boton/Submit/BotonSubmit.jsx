import React from 'react';
import { ButtonSubmitStyled } from './BotonSubmitStyled';

const BotonSubmit = ({
    children,
    onClick,
    disabled = false,
    radius = '32',
}) => {
    return (
        <ButtonSubmitStyled
            whileTap={{ scale: 0.95 }}
            disabled={disabled}
            onClick={onClick}
            type='submit'
            radius={radius}
        >
            {children}
        </ButtonSubmitStyled>
    );
};

export default BotonSubmit;
