import React from "react";

const Home = () => {
    const handleButton = () => {
        console.log('Button clicked');
    };
    return (
        <div style={{
            
                backgroundImage: `url(http://localhost:5173/Assets/Iteration-1-assets/home-banner.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                textAlign: 'center',
                color: 'white', 
                paddingTop: '20px', 
            
            
          }}>
            <div className="logo">
                <img src='./Assets\Iteration-1-assets\logo.svg' alt="Logo" />
                </div>
                <h1>KOD ACIKTIRIR <br/>PİZZA, DOYURUR</h1>
                <button className="home-button" onClick={handleButton}>ACIKTIM</button>
        </div>
        
    )
}
export default Home;