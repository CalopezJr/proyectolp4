import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './Profile.css'; // Asegúrate de importar tu archivo CSS

const Profile = () => {
    return (
        <div className="profile-body">
            {/* Navbar */}
            <div className="profile-navbar">
                <div className="container">
                    <div className="logo">
                        <span className="logo-text">Red Social</span>
                    </div>
                    <div className="button-container">
                        {/* Utiliza Link para navegar a /chat */}
                        <Link to="/chat" className="btn">Mensaje</Link>
                        <button className="btn">Seguir</button>
                    </div>
                </div>
            </div>

            {/* Profile Container */}
            <div className="profile-container">
                {/* Profile Header */}
                <div className="profile-header">
                    <div className="profile-picture">
                        <img src="https://img.a.transfermarkt.technology/portrait/big/406635-1668524492.jpg?lm=1" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <div className="username">Usuario</div>
                        <div className="fullname">nombre del usuario</div>
                        <div className="profile-stats">
                            <span>Posts: 3</span>
                            <span>Followers: 100</span>
                            <span>Following: 150</span>
                        </div>
                    </div>
                </div>

                {/* Posts Section */}
                <div className="posts-section">
                    {/* Post Tabs */}
                    <div className="post-tabs">
                        <div className="tab active">Posts</div>
                        <div className="tab">Tagged</div>
                    </div>

                    {/* Posts */}
                    <div className="posts">
                        <div className="post">
                            <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/06/19/17187971620723.jpg" alt="Post" />
                        </div>
                        <div className="post">
                            <img src="https://phantom-marca.unidadeditorial.es/7e747731a77d954af79f60b4392d75f4/resize/828/f/jpg/assets/multimedia/imagenes/2024/02/05/17071705902442.jpg" alt="Post" />
                        </div>
                        <div className="post">
                            <img src="https://ichef.bbci.co.uk/news/2048/cpsprodpb/85aa/live/47176430-b058-11ee-beb5-e1400df560f2.jpg" alt="Post" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
