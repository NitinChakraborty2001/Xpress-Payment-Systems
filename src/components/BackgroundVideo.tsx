"use client";
import { useEffect, useRef, memo } from 'react';
import Hls from 'hls.js';

interface BackgroundVideoProps {
  src: string;
}

const BackgroundVideo = memo(({ src }: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.error("Video play failed:", e));
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.error("Video play failed:", e));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      muted
      loop
      playsInline
      autoPlay
    />
  );
});

export default BackgroundVideo;
