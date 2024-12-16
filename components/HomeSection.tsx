'use client';
import Image from "next/image";
import '../style/homestyles.css';

const HomeSection: React.FC = () => {
  return (
     <section 
      id="home" 
      className="landingpage"
     >
     <div 
      className="whoami"
     >
       <div 
        className="whoamitext"
       >
         <h3 
          className="color3"
         >
           Hi my name is
         </h3>
         <span 
          className="nowrap uni"
         >
           <h1 
            className="color1"
           >
             Aprameya Kannan
           </h1>
           <h1 
            className="color3"
           >
             .
           </h1>
         </span>
         <h3 
          className="color3"
         >
           I am a 
         </h3>
         <span 
          className="nowrap uni"
         >
           <h1 
            className="color2"
           >
             Developer
           </h1>
           <h1 
            className="color3"
           >
             .
           </h1>
         </span>
       </div>
       <div 
        className="profile-picture"
       >
         <Image 
          src="/profilepic.jpg" 
          alt="" 
          width={150} 
          height={150} 
         />
       </div>
     </div>
   </section>
  );
};

export default HomeSection;
