"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "SI IKIP",
    desc: "Sistem Informasi Penjadwalan berfungsi agar pengguna dapat dengan mudah melihat ketersediaan ruangan, membuat jadwal kegiatan, dan melakukan reservasi ruangan sesuai kebutuhan.",
    img: "/project_picture/Project_SI_IKIP.png",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Landing Page Diferensia",
    desc: "Landing Page Company Diferensia memperkenalkan perusahaan dengan desain halaman pendaratan yang menarik, menekankan keunikan dan keunggulan kami.",
    img: "/project_picture/Project_LandingPage_DF.png",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Donasi Diferensia",
    desc: "Donasi Diferensia adalah platform amal yang memungkinkan individu dan kelompok membuat perbedaan melalui dukungan finansial.",
    img: "/project_picture/Project_donasi_DF.png",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Admin Panel RM",
    desc: "Admin Panel RM adalah platform administratif untuk manajemen sumber daya seperti keuangan, SDM, dan proyek.",
    img: "/project_picture/Project_AdminPanel_RM.png",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[800px] lg:h-[400px] xl:w-[1000px] xl:h-[500px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px] ">
            <defs>
              <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
