import React from 'react';
import styled from 'styled-components';

function FaqPage() {
    return (
        <div className ="leaderboard-page fadeInUp animated">
            <FaqForm>
                <div className ="faq">FAQ</div>
                <div className ="faq-page">
                    <div className ="info-section">
                        <div className="info-heading">Lorem ipsum dolor sit amet</div>
                        <div className="info-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut senectus id faucibus augue bibendum sapien sagittis aliquet. 
                        Arcu velit pharetra nulla id adipiscing enim, risus. Aliquam et, sit ut augue. 
                        Tincidunt eget eget interdum tempor, egestas at viverra.Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit. Ut senectus id faucibus augue bibendum sapien sagittis 
                         aliquet. Arcu velit pharetra nulla id adipiscing enim, risus. Aliquam et, sit ut augue. 
                         Tincidunt eget eget interdum tempor, egestas at viverra.Lorem ipsum dolor sit amet, 
                         consectetur adipiscing elit. Ut senectus id faucibus augue bibendum sapien sagittis aliquet. 
                         Arcu velit pharetra nulla id adipiscing enim, risus.</div>
                    </div>

                    <div className ="info-section">
                        <div className="info-heading">Lorem ipsum dolor sit amet</div>
                        <div className="info-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut senectus id faucibus augue bibendum sapien sagittis aliquet. 
                        Arcu velit pharetra nulla id adipiscing enim, risus. Aliquam et, sit ut augue. 
                        Tincidunt eget eget interdum tempor, egestas at viverra.Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit. Ut senectus id faucibus augue bibendum sapien sagittis 
                         aliquet. Arcu velit pharetra nulla id adipiscing enim, risus. Aliquam et, sit ut augue. 
                         Tincidunt eget eget interdum tempor, egestas at viverra.Lorem ipsum dolor sit amet, 
                         consectetur adipiscing elit. Ut senectus id faucibus augue bibendum sapien sagittis aliquet. 
                         Arcu velit pharetra nulla id adipiscing enim, risus.</div>
                    </div>
                    <div className ="info-section">
                        <div className="info-heading">Lorem ipsum dolor sit amet</div>
                        <div className="info-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut senectus id faucibus augue bibendum sapien sagittis aliquet. 
                        Arcu velit pharetra nulla id adipiscing enim, risus. Aliquam et, sit ut augue. 
                        Tincidunt eget eget interdum tempor, egestas at viverra.Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit. Ut senectus id faucibus augue bibendum sapien sagittis 
                         aliquet. Arcu velit pharetra nulla id adipiscing enim, risus. Aliquam et, sit ut augue. 
                         Tincidunt eget eget interdum tempor, egestas at viverra.Lorem ipsum dolor sit amet, 
                         consectetur adipiscing elit. Ut senectus id faucibus augue bibendum sapien sagittis aliquet. 
                         Arcu velit pharetra nulla id adipiscing enim, risus.</div>
                    </div>
                    

                </div>
            </FaqForm>
        </div>
    )
}

export default FaqPage;

const FaqForm = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 122px;
    margin-top: 50px;
    .faq{
        width: 100%;
        height: 98px;
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 20px;
    }
    .faq-page{
        width: 100%;
        height: 927px;
        background: #1D1D1D;
        border-radius: 5px;
        padding: 15px;
    }
    .info-section{
        padding:25px;
        width: 100%;
        .info-heading{
            font-style: normal;
            font-weight: 500;
            font-size: 28px;
            display: flex;
            color: #FFFFFF;
            margin-bottom: 20px;
        }
        .info-body{
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            color: grey;
        }
    }

`;
