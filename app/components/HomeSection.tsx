'use client';
import { CSSProperties } from 'react';

const HomeSection: React.FC = () => {
  const styles: { [key: string]: CSSProperties } = {
    landingpage: {
      scrollSnapAlign: 'start',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      fontWeight: 'normal',
      backgroundColor: 'rgb(67, 67, 67)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      flexDirection: 'column',
      paddingLeft: '5%',
    },
    profilePicture: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      width: '12vw',
      height: '12vw',
      maxWidth: '150px',
      maxHeight: '150px',
      borderRadius: '50%',
    },
    uniH1: {
      display: 'inline',
      fontSize: 'clamp(1rem, 2.5vw, 2rem)',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
    whoami: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '3%',
      paddingLeft: '5%',
      flexWrap: 'wrap',
    },
    whoamitext: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1vh',
    },
    color1: { color: '#c77dff' },
    color2: { color: '#e0aaff' },
    color3: { color: 'white' },
    color4: { color: '#9d4edd' },
    color5: { color: '#5a189a' },
  };

  return (
    <section id="home" style={styles.landingpage}>
      <div className="whoami" style={styles.whoami}>
        <div className="whoamitext" style={styles.whoamitext}>
          <h3 style={styles.color3}>Hi, my name is</h3>
          <span className="nowrap" style={styles.nowrap}>
            <span style={{ ...styles.uniH1, ...styles.color1 }}>Aprameya Kannan</span>
            <span style={{ ...styles.uniH1, ...styles.color3 }}>.</span>
          </span>
          <h3 style={styles.color3}>I am a</h3>
          <span className="nowrap" style={styles.nowrap}>
            <span style={{ ...styles.uniH1, ...styles.color2 }}>Developer</span>
            <span style={{ ...styles.uniH1, ...styles.color3 }}>.</span>
          </span>
        </div>
        <div className="profile-picture" style={styles.profilePicture}>
          <img 
            src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/profilepic.jpg" 
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
