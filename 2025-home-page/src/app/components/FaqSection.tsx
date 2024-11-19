import ParticleEffect from "./Particles";

interface FaqSection {}

const FaqSection: React.FC<FaqSection> = () => {
  return (
    <main className="w-full min-h-screen">
      <ParticleEffect />
    </main>
  );
};

export default FaqSection;
