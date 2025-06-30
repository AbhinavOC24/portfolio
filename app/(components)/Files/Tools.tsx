import {
  Database,
  Wrench,
  Zap,
  Code2,
  Palette,
  Globe,
  Anchor,
  Server,
  Layers,
  Cpu,
  Box,
} from "lucide-react";

export default function Tools() {
  const skills = [
    {
      name: "Next.js",
      icon: <Box className="w-6 h-6 text-black" />,
    },

    {
      name: "TypeScript",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
    },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6 text-green-500" />,
    },
    {
      name: "React",
      icon: <Zap className="w-6 h-6 text-cyan-500" />,
    },
    {
      name: "Node.js",
      icon: <Server className="w-6 h-6 text-green-600" />,
    },
    {
      name: "Express",
      icon: <Layers className="w-6 h-6 text-gray-600" />,
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-6 h-6 text-blue-600" />,
    },
    {
      name: "HTML, CSS, JavaScript",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
    },
    {
      name: "Solidity",
      icon: <Code2 className="w-6 h-6 text-purple-600" />,
    },
    {
      name: "Anchor",
      icon: <Anchor className="w-6 h-6 text-purple-500" />,
    },
    {
      name: "Rust",
      icon: <Wrench className="w-6 h-6 text-orange-600" />,
    },
    {
      name: "Figma",
      icon: <Palette className="w-6 h-6 text-pink-500" />,
    },
  ];

  return (
    <div className="w-auto   ">
      <hr className="border-dashed" />
      <div className="space-y-0">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex items-center gap-4 py-3">
              <div className="">{skill.icon}</div>
              <span className="text-lg font-family-pp text-black">
                {skill.name}
              </span>
            </div>
            {index < skills.length - 1 && <hr className="border-dashed" />}
          </div>
        ))}
        <hr className="border-dashed" />
      </div>
    </div>
  );
}
