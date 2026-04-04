import { motion } from "framer-motion";
import { FaUserAstronaut, FaLaptopCode, FaFire, FaLightbulb } from "react-icons/fa";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative bg-[#06060A] px-6 sm:px-12 lg:px-20 py-24 overflow-hidden"
        >
            {/* GRID BG */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* GLOW */}
            <div className="absolute top-[-120px] left-[20%] w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />
            <div className="absolute bottom-[-120px] right-[20%] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

            {/* HEADER */}
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs text-cyan-400 tracking-[0.4em] mb-3">
                    ABOUT ME
                </p>

                <h2 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Rohail Abbas
                    </span>
                    <br />
                    A Passionate{" "}
                    <span className="text-purple-400">
                        MERN Stack Developer
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 text-sm sm:text-base">
                    I build{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                        high-performance
                    </span>
                    ,{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                        scalable
                    </span>{" "}
                    and{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                        visually stunning
                    </span>{" "}
                    web applications using{" "}
                    <span className="text-purple-400 font-semibold">
                        MERN Stack
                    </span>.
                </p>

                {/* BADGE */}
                <div className="mt-6 flex justify-center">
                    <span className="px-4 py-2 text-xs rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-white font-semibold shadow-lg">
                        MERN STACK SPECIALIST
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
                        Who I Am
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-4">
                        I'm{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                            Rohail Abbas
                        </span>
                        , a dedicated{" "}
                        <span className="text-purple-400 font-semibold">
                            MERN Stack Developer
                        </span>{" "}
                        who loves crafting{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                            modern web experiences
                        </span>.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-6">
                        My focus is building{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                            scalable, fast and user-friendly
                        </span>{" "}
                        systems. I continuously improve my skills to deliver{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                            high-quality solutions
                        </span>{" "}
                        that stand out.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Experience", value: "2+ Years" },
                            { label: "Projects", value: "10+" },
                            { label: "Stack", value: "MERN" },
                            { label: "Goal", value: "Top Developer" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-4 rounded-xl bg-[#0D0D12] border border-[#1a1a1a]"
                            >
                                <p className="text-xs text-gray-400">{item.label}</p>
                                <h4 className="text-white font-semibold text-sm">
                                    {item.value}
                                </h4>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {[
                        {
                            icon: <FaLaptopCode />,
                            title: "Development",
                            desc: "Building full-stack applications with modern technologies.",
                        },
                        {
                            icon: <FaFire />,
                            title: "Performance",
                            desc: "Optimized systems with blazing fast speed & UX.",
                        },
                        {
                            icon: <FaLightbulb />,
                            title: "Problem Solving",
                            desc: "Creative thinking to solve real-world challenges.",
                        },
                        {
                            icon: <FaUserAstronaut />,
                            title: "Vision",
                            desc: "Focused on growth, innovation & future-ready systems.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
                        >
                            <div className="h-full rounded-2xl bg-[#0B0B10] p-6 border border-white/10 backdrop-blur-xl">
                                <div className="text-2xl text-cyan-400 mb-3 group-hover:scale-110 transition">
                                    {item.icon}
                                </div>

                                <h4 className="text-white font-semibold mb-1">
                                    {item.title}
                                </h4>

                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 text-center mt-20">
                <h3 className="text-white text-xl sm:text-2xl font-semibold">
                    Ready to Build Something Amazing?
                </h3>
                <button
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-white font-semibold hover:scale-105 transition shadow-lg"
                >
                    Let’s Work Together
                </button>
            </div>
        </section>
    );
}