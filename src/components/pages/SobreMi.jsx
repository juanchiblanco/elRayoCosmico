import React from "react";
import SpotifyLogo from "../../assets/Iconos/spotify-logo.svg";
import InstagramLogo from "../../assets/Iconos/Instagram-Logosu.png"
import YTLogo from "../../assets/Iconos/yt_logo_mono_dark.png"
import WppLogo from "../../assets/Iconos/WhatsApp.svg.webp"
import SoundcloudLogo from "../../assets/Iconos/soundcloud_logo_icon_170718.webp"

const SobreMi = () => {
  return (
    <section className="container-fluid hero7 py-5">
      <article className="d-flex flex-column align-items-center container sectionSobreMi colorSobreMi gap-4 py-4">
        <h2 className="display-6 text-center text-light">
          Seguime
        </h2>
        <img src={InstagramLogo} alt="Instagram" className="iconoInstagram" />
        <img src={WppLogo} alt="Whatsapp" className="iconoWpp" />
        <img src={SpotifyLogo} alt="Spotify" className="iconoSpotify" />
        <img src={YTLogo} alt="YouTube" className="iconoYT" />
        <img src={SoundcloudLogo} alt="SoundoCloud" className="iconoSoundcloud" />
      </article>
    </section>
  );
};

export default SobreMi;
