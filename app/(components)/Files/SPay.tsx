import Image from "next/image";
import sPayBanner from "../../public/static/sPayBanner.jpg";

const SPay = () => {
  return (
    <div className="relative h-[740px] flex flex-col">
      <Image src={sPayBanner} alt="banner" className="mb-4 z-30" />
      <div className="font-family-pp font-bold text-base leading-relaxed h-[450px] overflow-y-auto">
        <p className="mb-3 leading-5 text-xl">
          Built a Stripe-style payment processor on the Stacks blockchain that
          enables businesses to accept Bitcoin payments via sBTC. Designed a
          secure, real-time charge lifecycle with temporary wallets, automated
          payouts, and HMAC-signed webhook notifications — making Web3 payments
          as simple as Web2.
        </p>
        <p className="font-bold text-xl mt-4 mb-2">Technologies Used:</p>
        <ul className="list-disc list-inside text-xl space-y-1 mb-4">
          <li>Backend: Node.js + Express + TypeScript</li>
          <li>Database: PostgreSQL (Prisma ORM)</li>
          <li>Frontend: React + Next.js + Tailwind CSS</li>
          <li>Blockchain: Stacks (sBTC testnet, Clarity contracts)</li>
          <li>Deployment: Docker + Render</li>
          <li>Security: HMAC webhooks, API keys/secrets, bcrypt</li>
        </ul>
        <p className="font-bold text-xl mt-4 mb-2">Key Features:</p>
        <ul className="list-disc list-inside text-xl space-y-1">
          <li>Checkout flow with QR code & payment timer</li>
          <li>Real-time charge updates via SSE (polling fallback)</li>
          <li>State machine charge processor (pending → confirmed → payout)</li>
          <li>Merchant dashboard for managing payments</li>
          <li>sBTC → USD conversion with live rates</li>
          <li>Secure webhook delivery with retries & replay protection</li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#f9f3fb] to-transparent translate-y-[-44px] pointer-events-none"></div>
      <div className="pt-4 flex gap-3 border-t border-dashed relative">
        <a
          href="https://stacks-gateway.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#803399] hover:underline font-family-pp text-xl"
        >
          View project
        </a>
        <a
          href="https://github.com/AbhinavOC24/sPay"
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

export default SPay;
