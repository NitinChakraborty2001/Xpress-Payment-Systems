import { Hero } from '../components/Hero';
import BackgroundVideo from '../components/BackgroundVideo';

export const Home = () => {
  return (
    <main className="relative flex-grow flex flex-col">
      <BackgroundVideo src="https://stream.mux.com/hUT6X11m1Vkw1QMxPOLgI761x2cfpi9bHFbi5cNg4014.m3u8" />
      <Hero />
    </main>
  );
};
