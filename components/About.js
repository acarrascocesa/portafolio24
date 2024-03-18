"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "Nombre", value: "Angel" },
      { id: 2, type: "Apellido", value: "Carrasco" },
      { id: 4, type: "Nationalidad", value: "Dominicano" },
      { id: 5, type: "Freelance", value: "Disponible" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 6, type: "Direccion", value: "Santo Domingo, RD" },
      { id: 7, type: "Telefono", value: "849 531 1924" },
      { id: 8, type: "Email", value: "acarrascocesa@gmail.com" },
      { id: 10, type: "Idiomas", value: "Español, Ingles" },
    ],
  },
];

const counters = [
  {
    id: 1,
    title: 'años de <span className="block">experiencia</span>',
    value: "2",
  },
  {
    id: 2,
    title: 'completedos <span className="block">proyectos</span>',
    value: "20",
  },
  // {
  //   id: 3,
  //   title: 'happy <span className="block">customers</span>',
  //   value: "81",
  // },
  // { id: 4, title: 'awards <span className="block">won</span>', value: "53" },
];

const experiences = [
  {
    id: 1,
    date: "Nov-2023 - Actualmente",
    title: "Analista Inteligencia Financiera",
    company: "Banreservas",
    desc: "Como Analista de Inteligencia Financiera en el Banco de Reservas, aprovecho Power BI, Python y Oracle SQL para el análisis, limpieza y creación de visualizaciones interactivas y reportes de datos. Mi función se centra en brindar información financiera clara y respaldar decisiones estratégicas a través de metodologías avanzadas basadas en datos.",
  },
  {
    id: 2,
    date: "Jun-2023 - Actualmente",
    title: "Desarrollador Fullstack",
    company: "Janam Muebles",
    desc: "Como desarrollador fullstack especializado en React y Express.js, soy responsable de mantener y optimizar una sofisticada plataforma de comercio electrónico construida sobre una sólida pila tecnológica que incluye React, Nest.js, Azure, Docker y PostgreSQL.",
  },
  {
    id: 3,
    date: "Oct-2023 - Nov-2023",
    title: "Desarrollador Movil",
    company: "Sistemas Integrados Informaticos SII",
    desc: "Como Desarrollador Móvil especializado en Flutter, me enfoque en crear aplicaciones bancarias seguras y fáciles de usar para República Dominicana. Con Flutter y Dart, diseño interfaces responsivas y administro el estado de las aplicaciones usando Cubit, garantizando una experiencia de usuario perfecta. Mi experiencia radica en el desarrollo de soluciones financieras eficientes y visualmente atractivas.",
  },
  {
    id: 4,
    date: "Agos-2023 - Oct-2023",
    title: "Desarrollador Wordpress",
    company: "Netix",
    desc: "Como desarrollador de WordPress especializado en Elementor, era responsable de crear sitios web visualmente atractivos y funcionalmente robustos en el sector de real estate, que brinden una experiencia de usuario intuitiva. Utilizando el creador de páginas Elementor, diseño diseños responsivos e implemento funcionalidades personalizadas para satisfacer las necesidades específicas del cliente.",
  },
  {
    id: 5,
    date: "May-2023 - Agos-2023",
    title: "Desarrollador Junior",
    company: "Marmotech",
    desc: "Como desarrollador junior trabaje en una empresa local, utilizando React, SQL Server y Next.js. Desarrollé y mantuve aplicaciones web usando React. Utilicé SQL Server para la gestión de bases de datos. Implementte Next.js para renderizado del lado del servidor.",
  },
];

const educations = [
  {
    id: 1,
    date: "2023-Actualmente",
    title: "Anlista Ciberseguridad",
    unv: "Hack4U",
    desc: "Actualmente estoy ampliando mi perfil técnico con estudios especializados en ciberseguridad en la academia Hack4U, donde me estoy sumergiendo en el mundo de Linux desde sus fundamentos, preparándome para manejar sistemas y entornos operativos con solidez. Este camino incluye un enfoque intensivo en aprender Python orientado a técnicas de ataque ofensivo, lo que me permitirá desarrollar y aplicar estrategias de seguridad informática avanzadas. Mi experiencia previa en desarrollo web, complementada con formación continua en Udemy en programación y análisis de datos, junto con esta nueva incursión en ciberseguridad, refleja mi compromiso con el aprendizaje constante y mi pasión por estar en la vanguardia de la tecnología y la seguridad informática.",
  },
  {
    id: 2,
    date: "2022-2023",
    title: "Fullstack Developer",
    unv: "Academlo",
    desc: "Graduado del bootcamp de desarrollo web en Academlo, donde adquirí habilidades clave en diseño y desarrollo web. Me especialicé en HTML, CSS, y JavaScript para crear interfaces de usuario atractivas y funcionales, complementando esto con React para aplicaciones web modernas y dinámicas. En el back-end, desarrollé competencias en bases de datos con Postgres y en la creación de servidores y APIs robustas usando Node.js y Express. Mi formación equilibrada entre front-end y back-end me prepara para afrontar desafíos técnicos complejos, con el objetivo de desarrollar soluciones web eficientes y escalables.",
  },
  {
    id: 3,
    date: "2021-Actualmente",
    title: "Varios",
    unv: "Udemy",
    desc: "Soy un desarrollador web apasionado, con una sólida base en tecnologías de front-end y back-end adquirida en el bootcamp de Academlo, complementada con un compromiso continuo con el aprendizaje autodidacta en Udemy. He profundizado en programación con Python y JavaScript, y explorado el desarrollo avanzado con Next.js para aplicaciones web más eficientes y escalables. En el ámbito de las bases de datos, he fortalecido mis conocimientos en Oracle y expandido mis habilidades analíticas con cursos de Power BI. Esta educación continua me permite mantenerme al día con las últimas tecnologías y prácticas, preparándome para implementar soluciones innovadoras y efectivas en el desarrollo web.",
  },
  {
    id: 4,
    date: "2013",
    title: "Ingenieria Sistemas",
    unv: "Universidad Catolica Santo Domingo",
  },
];

const skills = [
  { id: 1, name: "html", value: "90" },
  { id: 2, name: "javascript", value: "90" },
  { id: 3, name: "css", value: "85" },
  { id: 4, name: "MONGO", value: "60" },
  { id: 5, name: "wordpress", value: "55" },
  { id: 6, name: "SQL", value: "80" },
  { id: 7, name: "python", value: "80" },
  { id: 8, name: "react", value: "85" },
];

const About = () => {
  const { dark } = useContext(TunisContext);
  return (
    <SectionContainer id="about">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"resumen"}
          colorTitle={"mi"}
          normalTitle={"acerca de"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col">
            {/* Personal Informations Starts */}
            <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 text-white font-semibold">
                informacion personal
              </h3>
              <img
                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                src="assets/img/dark-img-mobile.jpg"
                alt=""
              />
              <div className="flex justify-between xs:justify-start font-Open-sans">
                {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <a
                className="button group mt-30 overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                href="/assets/ACCV.pdf"  // Usando la importación del archivo PDF aquí
                download="ACCV.pdf"
              >
                <span
                  className={`relative z-20 text-${
                    dark
                      ? "white"
                      : "black-6 group-hover:text-white transition-all duration-300"
                  }`}
                >
                  decargar cv
                </span>
                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-download bg-accent" />
              </a>
            </div>
            {/* Personal Informations Ends */}
            {/* Facts Starts */}
            <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                {counters.map((counter) => (
                  <div className="w-1/2 px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${
                        dark ? "black-3" : "grey"
                      } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Facts Ends */}
          </div>
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            mis habilidades
          </h3>
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${
                    dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                  }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
          {/* Skills Ends */}
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            experiencia &amp; educacion
          </h3>
          {/* Resume Starts */}
          <div className="flex down-sm:flex-col from-sm:mb-40">
            {/* Experience Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {experience.company}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {experience.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa-sharp fa-solid fa-graduation-cap"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {education.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {education.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {education.unv}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {education.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Education Ends */}
          </div>
          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
