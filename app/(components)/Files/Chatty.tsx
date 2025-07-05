import Image from "next/image";
import Banner from "../../public/static/ChattyBanner.jpg";

const Chatty = () => {
  return (
    <div className="relative">
      <Image src={Banner} alt="banner" className="mb-4 z-30" />
      <div className="font-family-pp  font-bold text-base leading-relaxed h-[450px] overflow-y-auto">
        <p className="mb-3 leading-5 text-xl">
          Welcome to <strong>Chatty</strong>, a modern real-time chat
          application built for seamless communication and connection. Designed
          with a focus on
          <strong> user experience</strong> and <strong>performance</strong>,
          Chatty brings people together through instant messaging and intuitive
          design.
        </p>
        <p className="font-bold text-xl mt-4 mb-2">Technologies Used:</p>
        <ul className="list-disc list-inside text-xl space-y-1 mb-4">
          <li>
            <strong>Frontend:</strong> React.js with responsive design
          </li>
          <li>
            <strong>Backend:</strong> Node.js and Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB for reliable data storage
          </li>
          <li>
            <strong>Real-time Communication:</strong> Socket.io
          </li>
          <li>
            <strong>Authentication:</strong> JWT for secure user sessions
          </li>
          <li>
            <strong>Styling:</strong> Tailwind CSS for modern UI
          </li>
        </ul>
        <p className="font-bold text-xl mt-4 mb-2">Key Features:</p>
        <ul className="list-disc list-inside text-xl space-y-1">
          <li>Real-time messaging with Socket.io</li>
          <li>Private one-on-one messaging</li>
          <li>File and media sharing capabilities</li>
          <li>Secure user authentication & authorization</li>
          <li>Responsive design for all devices</li>
          <li>Emoji support for expressive messaging</li>
        </ul>
      </div>

      {/* Gradient overlay for fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#f9f3fb] to-transparent translate-y-[-44px] pointer-events-none"></div>

      {/* Dashed border with glow effect */}
      {/* <hr /> */}
      <div className=" pt-4 border-t border-dashed relative">
        {/* <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-b from-white/50 to-transparent blur-sm"></div> */}

        {/* Project link */}
        <a
          href="https://chat-app-dqek.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#803399] hover:underline font-family-pp text-xl"
        >
          View project
        </a>
      </div>
    </div>
  );
};

export default Chatty;
