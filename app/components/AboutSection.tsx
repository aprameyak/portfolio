'use client';

const AboutSection: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    aboutme: {
      paddingLeft: '15%',
      fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
      fontSize: 'large',
      fontWeight: 'normal',
      backgroundColor: 'rgb(67, 67, 67)',
      display: 'flex',
      boxSizing: 'border-box',
      scrollSnapAlign: 'start',
      height: '100vh',
      position: "relative",
    },
    socials: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      display: 'flex',
      gap: '10px',
    },
    aboutmetext: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: '0 auto',
      padding: '20px',
      width: '80%',
      maxWidth: '800px',
      gap: '10px',
    },
    focustext: {
      textAlign: 'left',
      maxWidth: '90%',
    },
    focustextH3: {
      display: 'inline',
      margin: '0',
      padding: '0',
    },
    focustextH4: {
      display: 'inline',
      fontSize: 'large',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
    uniH1: {
      display: 'inline',
      fontSize: 'xx-large',
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
    <section id="about" style={styles.aboutme}>
      <div style={styles.aboutmetext}>
        <h2 style={styles.color3}>I am a student at the</h2>
        <span style={{ ...styles.nowrap }}>
          <span style={{ ...styles.uniH1, ...styles.color2 }}>
            University of Maryland
          </span>
          <span style={{ ...styles.uniH1, ...styles.color3 }}>.</span>
        </span>
        <h3 style={styles.color3}>Passionate about the future of technology:</h3>
        <div style={styles.focustext}>
          <h3 style={{ ...styles.focustextH3, ...styles.color3 }}>Focusing on</h3>
          <h3 style={styles.focustextH3}>&nbsp;</h3>
          <span style={{ ...styles.focustextH4, ...styles.color1 }}>software development</span>
          <h3 style={{ ...styles.focustextH3, ...styles.color3 }}>,</h3>
          <h3 style={styles.focustextH3}>&nbsp;</h3>
          <span style={{ ...styles.focustextH4, ...styles.color1 }}>cloud computing</span>
          <h3 style={{ ...styles.focustextH3, ...styles.color3 }}>, and</h3>
          <h3 style={styles.focustextH3}>&nbsp;</h3>
          <span style={{ ...styles.focustextH4, ...styles.color1 }}>artificial intelligence</span>
          <h3 style={{ ...styles.focustextH3, ...styles.color3 }}>.</h3>
        </div>
        <div style={styles.socials}>
          <div>
            <a href="https://www.github.com/aprameyak/">
              <img src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/github.png" alt="GitHub" width={50} height={50} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aprameyak/">
              <img src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/linkedin.png" alt="LinkedIn" width={50} height={50} />
            </a>
          </div>
          <div>
            <a href="https://medium.com/@aprameyakannan">
              <img src="https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/medium.jpg" alt="Medium" width={50} height={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
