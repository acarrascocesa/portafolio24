"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Janam Ecommerce",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.jpg",
    project: "Ecommerce Website",
    client: "Janam Muebles",
    langages: "CSS, Javascript, React, Postgres, Azure, Docker",
    previewLink: "https://www.janammuebles.com/",
  },
  {
    id: 2,
    title: "Iglesia Website",
    type: "img",
    src: "",
    img: "assets/img/projects/project-2.jpg",
    project: "Church Website",
    client: "Shekinnah TC",
    langages: "React, CSS, Axios, Vite",
    previewLink: "https://shekinahtc.netlify.app/",
  },
  {
    id: 3,
    title: "Cars Rental",
    type: "img",
    src: "",
    img: "assets/img/projects/project-3.jpg",
    project: "Website",
    client: "Practica",
    langages: "React, Next JS, Tailwind",
    previewLink: "https://ac-cars-store.vercel.app/",
  },
  {
    id: 4,
    title: "Internal Survey App",
    type: "img",
    src: "",
    img: "assets/img/projects/project-4.jpg",
    project: "Encuestas",
    client: "Marmotech",
    langages: "NextJS, SurveyJS, CSS Module",
    previewLink:
      "https://encuesta-final.vercel.app/orden/encuesta3/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbWV0cm8iOiIyMDU4NDkiLCJpYXQiOjE2ODU5OTY4OTl9.Iu2zlv3b5paCDitRNQen7P2KFf5kCPZBEv6v0yZL6Zg",
  },
  {
    id: 5,
    title: "Tesla UI Clone",
    type: "img",
    src: "",
    img: "assets/img/projects/project-5.png",
    project: "Website",
    client: "Practica",
    langages: "React, Styled Components, Vite",
    previewLink: "https://acteslaclone.netlify.app/",
  },
  {
    id: 6,
    title: "Portafolio Web",
    type: "img",
    src: "",
    img: "assets/img/projects/project-7.jpg",
    project: "Website",
    client: "Yo",
    langages: "React, Tailwind",
    previewLink: "https://acportfolio2023.netlify.app/",
  },
  {
    id: 7,
    title: "Tablero Power BI",
    type: "img",
    src: "",
    img: "assets/img/projects/project-6.jpg",
    project: "Dashboard",
    client: "Banreservas",
    langages: "Power BI, Oracle",
    previewLink: "",
  },
  {
    id: 8,
    title: "Tablero Power BI",
    type: "img",
    src: "",
    img: "assets/img/projects/project-8.jpg",
    project: "Dashboard",
    client: "Banreservas",
    langages: "Power BI, Oracle",
    previewLink: "",
  },
  {
    id: 9,
    title: "Tablero Power BI",
    type: "img",
    src: "",
    img: "assets/img/projects/project-9.jpg",
    project: "Dashboard",
    client: "Banreservas",
    langages: "Power BI, Oracle",
    previewLink: "",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"proyectos"}
          colorTitle={"portfolio"}
          normalTitle={"mi"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
