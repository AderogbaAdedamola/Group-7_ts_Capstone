import './index.css';
import videoPoster from '../../assets/video-poster.png';

export default function VideoSection() {
  return (
    <section className="video-section">

      <div className="video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="https://www.pexels.com/download/video/3141208/" type="video/mp4" />
        </video>
      </div>

      <div className="video-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{' '}
          <strong>mass</strong>,{' '}
          <strong>diameter</strong>,{' '}
          <strong>gravity</strong>, and{' '}
          <strong>density</strong>, we gain insight into how
          planets form, behave, and interact within the solar system.
        </p>
      </div>

    </section>
  );
}