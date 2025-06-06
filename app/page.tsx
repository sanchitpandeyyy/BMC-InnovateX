export const dynamic = "force-dynamic";
import FAQ from "./component/FAQ";
import HeroLander from "./component/HeroLander";
import KeyInfo from "./component/KeyInfo";
import Prizes from "./component/Prizes";
import Sponsor from "./component/Sponsor";
import Track from "./component/Track";

export default function Home() {
  return (
    <>
      <HeroLander />
      <KeyInfo />
      <Track />
      <Prizes />
      <Sponsor />
      <FAQ />
    </>
  );
}
