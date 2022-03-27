import React, { useContext } from "react";
import "./UserProfile.css";
import {useNavigate} from "react-router-dom";
import userImg from "../../images/user-img.png";
import { UserCoinsContext } from "../../Context/UserCoinsContextProvider";
import Navbar from "../Navbar/Navbar";

function UserProfile() {

    const {userCoins, setUserCoins} = useContext(UserCoinsContext);

    return (
        <>
        <Navbar />
        <section className="user-profile">
            <div className="user-profile__container">
                <h1 className="user-profile--header">Account</h1>
                <div className="user-profile__content">
                    <div className="user-profile__content--left">
                        <img src={userImg}/>
                    </div>
                    <div className="user-profile__content--right">
                        <h3>Account details</h3>
                        <div className="account-details">
                            <div className="user-detail--box">
                                <h4>Name:</h4>
                                <h4>Guest</h4>
                            </div>
                            <div className="user-detail--box">
                                <h4>Email:</h4>
                                <h4>guest123@gmail.com</h4>
                            </div>
                            <div className="user-detail--box">
                                <h4>Password:</h4>
                                <h4>*************</h4>
                            </div>
                        </div>
                        <h3>Payments</h3>
                        <div className="coins-details">
                            <h4>Your Coins: <span>{userCoins}</span></h4>
                            <button onClick={() => setUserCoins(prevState => prevState + 1000)}>Buy Coins</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default UserProfile;