import React from "react";

export function Chat({color}){
    return(
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.01085 19.6687C7.47917 20.5155 9.18281 21 10.9996 21C16.5225 21 21 16.5229 21 11C21 5.47716 16.5228 1 11 1C5.47715 1 1 5.47716 1 11C1 12.8168 1.48449 14.5205 2.33133 15.9888L2.33461 15.9945C2.41609 16.1358 2.45718 16.207 2.47579 16.2743C2.49334 16.3378 2.49824 16.3949 2.49375 16.4607C2.48892 16.5313 2.46511 16.6045 2.41631 16.7509L1.56207 19.3137L1.56099 19.317C1.38075 19.8577 1.29063 20.1281 1.35487 20.3082C1.41088 20.4653 1.53521 20.5893 1.69227 20.6453C1.87202 20.7094 2.14116 20.6197 2.6795 20.4402L2.6862 20.4377L5.24894 19.5835C5.39486 19.5349 5.46904 19.5102 5.53955 19.5054C5.60528 19.5009 5.66197 19.5068 5.72548 19.5244C5.79298 19.543 5.86426 19.5841 6.00626 19.666L6.01085 19.6687Z" fill={color} stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}