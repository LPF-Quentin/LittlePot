import React from 'react';
import ButtonAdd from './ButtonAdd';

const TotalPot = () => {
    return (
        <div className="potTotal">
            Cette cagnotte a reunis $total grace a ces contributeur(s)
            <div className="btns">
                <ButtonAdd />
            </div>
            
        </div>
    );
};

export default TotalPot;