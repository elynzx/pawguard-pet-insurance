import { FooterWaves } from "../ui/footer-wave";
import Dog1 from "../../../assets/footer-dog.svg"

export function Footer() {
  return (
    <footer className="relative w-full h-100 bg-c-light-blue mt-60">
      <div className="absolute bottom-full left-0 w-full -mb-px">
        <FooterWaves />
      </div>
      <div className="max-w-7xl mx-auto">

        <img
          src={Dog1}
          className="h-80" />
      </div>
    </footer>
  );
}
