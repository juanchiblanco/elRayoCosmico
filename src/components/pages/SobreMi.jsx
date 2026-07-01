import React from "react";
import SpotifyLogo from "../../assets/Iconos/spotify-logo.svg";
import InstagramLogo from "../../assets/Iconos/Instagram-Logosu.png";
import YTLogo from "../../assets/Iconos/yt_logo_mono_dark.png";
import WppLogo from "../../assets/Iconos/WhatsApp.svg.webp";
import SoundcloudLogo from "../../assets/Iconos/soundcloud_logo_icon_170718.webp";

const SobreMi = () => {
  return (
    <section className="container-fluid hero7 py-5">
      <article className="d-flex flex-column align-items-center container sectionSobreMi colorSobreMi gap-4 py-4">
        <h2 className="display-6 text-center text-light">
          Seguime o escribime
        </h2>
        <a
          href="https://www.instagram.com/juanchiblanco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt="Instagram" className="iconoInstagram" />
        </a>
        <a
          href="https://wa.me/+5493813004100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WppLogo} alt="Whatsapp" className="iconoWpp" />
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/1ajIKeiJJBPatCI8eAGnJh?si=IvJcANaFT62bqW56H6tsCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={SpotifyLogo} alt="Spotify" className="iconoSpotify" />
        </a>
        <a
          href="https://www.youtube.com/@elrayocosmico"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YTLogo} alt="YouTube" className="iconoYT" />
        </a>
        <a
          href="https://soundcloud.com/elrayocosmico"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={SoundcloudLogo}
            alt="SoundoCloud"
            className="iconoSoundcloud"
          />
        </a>
      </article>
    </section>
  );
};

export default SobreMi;
