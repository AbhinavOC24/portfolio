import Image from "next/image";
import Banner from "../../public/static/Banner.jpg";

const AboutMe = () => {
  return (
    <div>
      <Image src={Banner} alt="banner" className="mb-4 z-30" />
      <div className="font-family-pp font-bold text-base leading-relaxed">
        <p className="mb-3 leading-5 text-xl">
          Hey, I’m <strong>Abhinav Chauhan</strong>, a Web Developer & Web3
          Enthusiast passionate about building fun, meaningful digital
          experiences. I blend <strong>full-stack</strong> and{" "}
          <strong>blockchain</strong> development to create modern,
          decentralized solutions.
        </p>
        <p className="mb-3 leading-5 text-xl">
          I work with the <strong>MERN stack</strong>,{" "}
          <strong>PostgreSQL</strong>, and <strong>Web3 tools</strong> like{" "}
          <strong>Solidity</strong>, <strong>Rust</strong>,{" "}
          <strong>Anchor</strong>, and <strong>Foundry</strong>, focusing on
          secure smart contracts and dApps. I also enjoy{" "}
          <strong>UI/UX design</strong> and <strong>photography</strong>,
          blending creativity with technology.
        </p>
        <p className="font-bold text-xl mt-4 mb-2">Expertise & Skills:</p>
        <ul className="list-disc list-inside text-xl space-y-1 ">
          <li>Full-stack Web Development (MERN, PostgreSQL)</li>
          <li>Web3 & Smart Contracts (Solana, Ethereum, Solidity, Rust)</li>
          <li>UI/UX Design</li>
          <li>Creative Photography</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
