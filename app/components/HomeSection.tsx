'use client';
import Image from "next/image";
import { CSSProperties } from 'react';

const HomeSection: React.FC = () => {
  const styles: { [key: string]: CSSProperties } = {
    landingpage: {
      scrollSnapAlign: 'start',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      fontSize: 'large',
      fontWeight: 'normal',
      backgroundColor: 'rgb(67, 67, 67)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      flexDirection: 'column',
      paddingLeft: '15%',
    },
    profilePicture: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
    whoami: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '20px',
      paddingLeft: '10%',
    },
    whoamitext: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    },
    color1: {
      color: '#c77dff',
    },
    color2: {
      color: '#e0aaff',
    },
    color3: {
      color: 'white',
    },
    color4: {
      color: '#9d4edd',
    },
    color5: {
      color: '#5a189a',
    },
  };

  return (
    <section id="home" style={styles.landingpage}>
      <div className="whoami" style={styles.whoami}>
        <div className="whoamitext" style={styles.whoamitext}>
          <h3 className="color3" style={styles.color3}>
            Hi my name is
          </h3>
          <span className="nowrap uni" style={styles.nowrap}>
            <h1 className="color1" style={styles.color1}>
              Aprameya Kannan
            </h1>
            <h1 className="color3" style={styles.color3}>
              .
            </h1>
          </span>
          <h3 className="color3" style={styles.color3}>
            I am a 
          </h3>
          <span className="nowrap uni" style={styles.nowrap}>
            <h1 className="color2" style={styles.color2}>
              Developer
            </h1>
            <h1 className="color3" style={styles.color3}>
              .
            </h1>
          </span>
        </div>
        <div className="profile-picture" style={styles.profilePicture}>
          <Image src="/profilepic.jpg" alt="" width={150} height={150} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
