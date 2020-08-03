import React from "react";
import "./Footer.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

function Footer() {
  return (
    <div className="footer">
      <h3>Contact Us:</h3>
      <div className="socialMedia">
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="0"
          borderStyle="solid"
          icon="facebook"
          iconColor="rgba(247,200,115,1)"
          backgroundColor="rgba(44,43,43,1)"
          iconSize="2"
          roundness="9%"
          url="https://facebook.com"
          size="60"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="0"
          borderStyle="solid"
          icon="twitter"
          iconColor="rgba(247,200,115,1)"
          backgroundColor="rgba(44,43,43,1)"
          iconSize="2"
          roundness="9%"
          url="https://twitter.com"
          size="60"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="0"
          borderStyle="solid"
          icon="googleplus"
          iconColor="rgba(247,200,115,1)"
          backgroundColor="rgba(44,43,43,1)"
          iconSize="2"
          roundness="9%"
          url="https://googleplus.com"
          size="60"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="0"
          borderStyle="solid"
          icon="instagram"
          iconColor="rgba(247,200,115,1)"
          backgroundColor="rgba(44,43,43,1)"
          iconSize="2"
          roundness="9%"
          url="https://instagram.com"
          size="60"
        />
      </div>
    </div>
  );
}

export default Footer;
