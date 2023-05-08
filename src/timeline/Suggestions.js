import { Avatar } from '@mui/material';
import React from 'react';
import './Suggestions.css';

const Suggestions = ({ user }) => {
    return (
        <div className='suggestions'>
            <div className="suggestions__title">Suggestions for you</div>
            <div className="suggestions__usernames">
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>amish8863</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>Aj451</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>Anjanaa_1_2</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>Real_Hema_Malini</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>Its_pallavi001</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>Goldi_54747</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className='username'>Pranay_9685</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">follow</button>
                </div>
            </div>
        </div>
    )
}

export default Suggestions
