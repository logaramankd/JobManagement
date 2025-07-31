import React, { useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import location from '../assets/location.svg'
import profileImg from '../assets/profile.png'

import { FormControl, MenuItem, Select, styled } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from '@mui/material/Slider';


const DropdownIcon = () => (
    <KeyboardArrowDownIcon sx={{
        fontSize: '26px',
        color: '#686868',
        fontWeight: 300,
        cursor: "pointer",
        marginRight: "-8px"
    }} />
);

const CustomMenus = styled(MenuItem)(() => ({
    listStyle: 'none',
    marginLeft: "-5px",
    color: "black"
}));

const Header = () => {
    const [value, setvalue] = useState([10, 90000]);
    const handleChange = (event, newvalue) => {
        setvalue(newvalue)
    }
    const salary = (num) => {
        return num >= 1000 ? `${Math.floor(num / 1000)}k` : num;
    };
    return (
        <div className='head-container'>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="ul">
                        <li><a href="#">Home</a></li>
                        <li>
                            <a href="#">Find Jobs</a>
                        </li>
                        <li >
                            <a href="#">Find Talents</a>
                        </li>
                        <li >
                            <a href="#">About us</a>
                        </li>
                        <li >
                            <a href="#">Testimonials</a>
                        </li>
                    </div>

                    <div className="button-tag">
                        <button className='createbtn'>Create Jobs</button>
                    </div>
                </div>
            </nav>
            <div className="filterContainer">
                <div className="filters"
                    style={{
                        borderRight: "2px solid #EAEAEA",
                        width: "315px",
                        top: "-4px",
                        left: "6.5px",
                    }} >
                    <img src={search}
                        style={{
                            position: "relative",
                            width: "20px",
                            height: "20px",
                            top: "-2px",
                            marginLeft: "-8px",
                            marginRight: "16px",
                        }} />
                    <input
                        type="text"
                        placeholder="Search By Job Title, Role"
                    />
                </div>
                <div className="filters"
                    style={{
                        borderRight: "2px solid #EAEAEA",
                        top: "-4px",
                        left: "8px",
                        width: "265px",
                        height: "51px"
                    }} >
                    <img src={location}
                        style={{
                            position: "relative",
                            width: "18px",
                            height: "23px",
                            marginLeft: "-45px",
                            left: "-2px"
                        }} />
                    <FormControl sx={{ width: '200px' }}>
                        <Select

                            IconComponent={DropdownIcon}
                            displayEmpty
                            sx={{
                                width: "248px",
                                borderRadius: '10px',
                                height: '50px',
                                border: 'none',
                                fontSize: '16px',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&.Mui-focused': { boxShadow: 'none' },
                                padding: "5px 0px 5px 10px"
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        borderRadius: '10px',
                                        boxShadow: '0px 0px 14px 0px #93939340',
                                    }
                                }
                            }}
                        >
                            <CustomMenus    
                                sx={{ display: "none" }}>
                               
                                <em style={{ color: "grey", fontStyle: "normal" }} >Preferred Location</em>
                            </CustomMenus>
                            <CustomMenus value="All Locations">All Locations</CustomMenus>
                            <CustomMenus value="Chennai">Chennai</CustomMenus>
                            <CustomMenus value="Coimbatore">Coimbatore</CustomMenus>
                            <CustomMenus value="Bengaluru">Bengaluru</CustomMenus>
                        </Select>
                    </FormControl>

                </div>


                <div className="filters"
                    style={{
                        borderRight: "2px solid #EAEAEA",
                        top: "-6px",
                        left: "17px",
                        width: "255px",
                        height: "51px",
                    }} >
                    <img src={profileImg}
                        style={{
                            width: "21px",
                            height: "19px",
                            marginLeft: "-51px"
                        }} />
                    <FormControl sx={{ width: '200px' }}>
                        <Select
                            IconComponent={DropdownIcon}
                            displayEmpty
                            sx={{
                                position: "relative",
                                left: "3px",
                                width: "250px",
                                borderRadius: '10px',
                                height: '50px',
                                border: 'none',
                                fontSize: '16px',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&.Mui-focused': { boxShadow: 'none' },
                                padding: "4px 2px 0px 7px"
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        borderRadius: '10px',
                                        boxShadow: '0px 0px 14px 0px #93939340',
                                    }
                                }
                            }}
                        >
                            <CustomMenus value="">All Job Types</CustomMenus>
                            <CustomMenus selected sx={{
                                display: "none"
                            }} >
                                <em style={{ color: "grey", fontStyle: "normal" }} >
                                    Job Type
                                </em>
                            </CustomMenus>
                            <CustomMenus value="Full Time">Full Time</CustomMenus>
                            <CustomMenus value="Internship">Internship</CustomMenus>
                            <CustomMenus value="Part Time">Part Time</CustomMenus>
                            <CustomMenus value="Contract">Contract</CustomMenus>
                        </Select>
                    </FormControl>
                </div>


                <div className="filters" style={{ flexDirection: "column" }} >
                    <div style={{
                        display: "flex",
                        gap: "48px",
                        width: "300px",
                        position: "relative",
                        top: "-18px",
                        left: "-9px",
                        color: 'black'
                    }} >
                        <span>Salary Per Month</span>
                        <span>
                            ₹{salary(value[0])} -₹{salary(value[1])}
                        </span>
                    </div>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={90000}
                        step={1}
                        sx={{
                            position: "relative",
                            left: "-20px",
                            top: "-9px",
                            color: 'black',
                            width: "250px",
                            bottom: "7px",
                            '& .MuiSlider-thumb': {
                                backgroundColor: 'white',
                                border: '5px solid black',
                                width: 15,
                                height: 15,
                                boxShadow: 'none',
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.16)',
                                },
                            },
                            '& .MuiSlider-track': {
                                backgroundColor: 'black',
                                height: 3,
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#eee',
                                height: 3,
                            },
                            '& .MuiSlider-valueLabel': {
                                backgroundColor: 'white',
                                color: 'black',
                                fontWeight: 'bold',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                boxShadow: '0px 0px 4px rgba(0,0,0,0.2)',
                            },
                        }}
                    />

                </div>

            </div>
        </div>
    )
}

export default Header
