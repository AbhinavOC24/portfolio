import Image from "next/image";
import ShuttrSpaceBanner from "../../public/static/ShuttrSpaceBanner.jpg";

const ShuttrSpace = () => {
  return (
    <div className="relative h-[740px] flex flex-col">
      <Image src={ShuttrSpaceBanner} alt="banner" className="mb-4 z-30" />
      <div className="font-family-pp font-bold text-base leading-relaxed h-[450px] overflow-y-auto">
        <p className="mb-3 leading-5 text-xl">
          ShuttrSpace is a Web3 photography platform designed for creators to
          showcase their work, collaborate on bounties, and build professional
          on-chain portfolios. With wallet-gated interactions and seamless IPFS
          integration, ShuttrSpace bridges the gap between Web2 inspiration
          platforms and decentralized ownership.
        </p>
        <p className="font-bold text-xl mt-4 mb-2">Technologies Used:</p>
        <ul className="list-disc list-inside text-xl space-y-1 mb-4">
          <li>Frontend: Next.js with Tailwind CSS</li>
          <li>Backend: Node.js + Express</li>
          <li>Database: PostgreSQL (Prisma ORM)</li>
          <li>Blockchain: Solana with Anchor framework</li>
          <li>Storage: IPFS (Web3.Storage / Pinata)</li>
          <li>Auth: Solana Wallet Adapter + Express Session</li>
        </ul>
        <p className="font-bold text-xl mt-4 mb-2">Key Features:</p>
        <ul className="list-disc list-inside text-xl space-y-1">
          <li>Browse inspiration feed without login</li>
          <li>Wallet-gated uploads, tips, and bounties</li>
          <li>Professional portfolio-grade profiles</li>
          <li>Full-quality images stored on IPFS</li>
          <li>Optional on-chain publishing of metadata</li>
          <li>Real-time bounty challenges & submissions</li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#f9f3fb] to-transparent translate-y-[-44px] pointer-events-none"></div>
      <div className="pt-4 flex gap-3 border-t border-dashed relative">
        <a
          href="https://shuttr-space.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#803399] hover:underline font-family-pp text-xl"
        >
          View project
        </a>
        <a
          href="https://github.com/AbhinavOC24/ShuttrSpace"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#803399] hover:underline font-family-pp text-xl"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ShuttrSpace;
