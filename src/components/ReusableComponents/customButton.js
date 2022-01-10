import React from 'react';
import styled from 'styled-components';

function CustomButton({width, height, innerW, innerH, text, addedClass, bgColor}) {
    return (
        <div className={`${addedClass}`}>
        <Btn width={width} height={height} innerH={innerH} innerW={innerW} bgColor={bgColor}>
            <div className="inner">{text}</div>

        </Btn>
        </div>
    )
}

export default CustomButton;

const Btn = styled.div`
    position: relative !important;
    height:${props => props.height};
    width:${props => props.width};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(263.86deg, #FACF5A 0%, #DC0D16 100%);
    .inner{
        background-color:  ${props => props?.bgColor? props?.bgColor: "black"};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        height:${props => props.innerH};
        width:${props => props.innerW};
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF; 
    }
`;
