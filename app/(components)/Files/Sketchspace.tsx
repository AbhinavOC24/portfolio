import Image from "next/image";
import SketchSpaceBanner from "../../public/static/SketchSpaceBanner.png";

const SketchSpace = () => {
  return (
    <div className="relative">
      <Image src={SketchSpaceBanner} alt="banner" className="mb-4 z-30" />
      <div className="font-family-pp font-bold text-base leading-relaxed h-[450px] overflow-y-auto">
        <p className="mb-3 leading-5 text-xl">
          SketchSpace is a collaborative digital whiteboard application inspired
          by Excalidraw. Built for creative collaboration and visual thinking,
          SketchSpace enables teams and individuals to sketch, draw, and
          brainstorm together in real-time with an intuitive and powerful
          drawing interface.
        </p>
        <p className="font-bold text-xl mt-4 mb-2">Technologies Used:</p>
        <ul className="list-disc list-inside text-xl space-y-1 mb-4">
          <li>Frontend: React.js with responsive design</li>
          <li>Backend: Node.js and Express.js</li>
          <li>Database: PostgreSQL for reliable data storage</li>
          <li>Real-time Communication: WebSockets</li>
          <li>Authentication: JWT for secure user sessions</li>
          <li>Styling: Tailwind CSS for modern UI</li>
        </ul>
        <p className="font-bold text-xl mt-4 mb-2">Key Features:</p>
        <ul className="list-disc list-inside text-xl space-y-1">
          <li>Collaborative drawing with WebSocket integration</li>
          <li>Multiple drawing tools and shapes</li>
          <li>Real-time cursor tracking and user presence</li>
          <li>Secure user authentication & authorization</li>
          <li>Responsive design for all devices</li>
          <li>Export drawings in multiple formats</li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#f9f3fb] to-transparent translate-y-[-44px] pointer-events-none"></div>
      <div className="pt-4 flex gap-3 border-t border-dashed relative">
        <a
          href="https://sketch-space-chi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#803399] hover:underline font-family-pp text-xl"
        >
          View project
        </a>
        <a
          href="https://github.com/AbhinavOC24/Sketch-Space"
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

export default SketchSpace;
