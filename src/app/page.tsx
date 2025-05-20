import Button from "@/components/ui/Button";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-1/2 text-center">
        <p className="mb-4">
          Doğal kaynakların korunması açısından sürdürülebilir yaşam çözümleri,
          sınırlı kaynaklarımızın daha verimli kullanılmasını sağlar. Su, enerji
          ve hammaddeleri daha akıllıca kullanarak gelecek nesillerin de bu
          kaynaklardan faydalanabilmesini sağlarız.
        </p>
        <Button>say hi!</Button>
      </div>
      <div className="relative w-[478px] h-[521px]">
        <Image src="/waterfall.png" alt="waterfall image" fill />
      </div>
    </div>
  );
};

export default Home;
