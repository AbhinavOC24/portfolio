import Image from "next/image";
import Banner from "../../public/static/ChattyBanner.jpg";

const Chatty = () => {
  return (
    <div className="relative h-[740px] flex flex-col ">
      <Image src={Banner} alt="banner" className="mb-4 z-30" />
      <div className="font-family-pp  font-bold text-base leading-relaxed h-[450px] overflow-y-auto">
        <p className="mb-3 leading-5 text-xl">
          Chatty is a modern real-time chat application built for seamless
          communication and connection. Designed with a focus on user experience
          and performance, Chatty brings people together through instant
          messaging and intuitive design.
        </p>
        <p className="font-bold text-xl mt-4 mb-2">Technologies Used:</p>
        <ul className="list-disc list-inside text-xl space-y-1 mb-4">
          <li>Frontend: React.js with responsive design</li>
          <li>Backend: Node.js and Express.js</li>
          <li>Database: MongoDB for reliable data storage</li>
          <li>Real-time Communication: Socket.io</li>
          <li>Authentication: JWT for secure user sessions</li>
          <li>Styling: Tailwind CSS for modern UI</li>
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

      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#f9f3fb] to-transparent translate-y-[-44px] pointer-events-none"></div>

      <div className=" pt-4 flex gap-3 border-t border-dashed relative">
        <a
          href="https://chat-app-dqek.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#803399] hover:underline font-family-pp text-xl"
        >
          View project
        </a>
        <a
          href="https://github.com/AbhinavOC24/chat_app"
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

export default Chatty;
