import React from 'react'
import amazon from '../assets/amazon.svg';
import microsoft from '../assets/microsoft.svg';
import swiggy from '../assets/swiggy.png';
import defaultLogo from '../assets/logo.png';
const mapping = {
    amazon: amazon,
    microsoft: microsoft,
    swiggy: swiggy,
};

const logo = (company_name) => {
    return mapping[company_name?.toLowerCase()] || defaultLogo;
}

export default logo
