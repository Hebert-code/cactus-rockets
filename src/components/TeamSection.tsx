import { Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teamMembers } from "@/data/team";
import SectionTitle from "./ui/SectionTitle";
import StarBackground from "./ui/StarBackground";

const TeamSection = () => {
  return (
    <section
      id="equipe"
      className="relative py-20 px-4 sm:px-6 lg:px-24 text-white bg-[linear-gradient(to_top,_#0A3622,_#080808)]"
    >
      <StarBackground/>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nossa Equipe"
          subtitle="Conheça os talentosos estudantes e professores que compõem nossa equipe multidisciplinar."
        />

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="
              [&_.swiper-button-next]:!text-green-400 
              [&_.swiper-button-prev]:!text-green-400
                [&_.swiper-button-next]:!top-1/2 
                [&_.swiper-button-prev]:!top-1/2
                [&_.swiper-button-next]:!right-0 
                [&_.swiper-button-prev]:!left-0
                [&_.swiper-button-next]:!w-8 
                [&_.swiper-button-prev]:!w-8
                [&_.swiper-button-next]:!h-8 
                [&_.swiper-button-prev]:!h-8
                [&_.swiper-button-next]:!rounded-full 
                [&_.swiper-button-prev]:!rounded-full
                [&_.swiper-button-next]:!z-30 
                [&_.swiper-button-prev]:!z-30"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    group relative h-full flex flex-col
                    bg-[rgba(0,0,0,0.8)] backdrop-blur-sm
                    rounded-lg overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]
                    ring-1 ring-transparent hover:ring-green-500
                  "
                >
                  <div className="h-60 sm:h-64 md:h-72 lg:h-56 bg-cosmic-darkgray overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black to-transparent pointer-events-none z-10" />
                    <div className="absolute top-0 right-0 bg-secondary/80 text-cosmic-black text-xs font-medium py-1 px-2 z-20">
                      {member.role.split(" ")[0]}
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between items-center">
                    <div>
                      <h4 className="font-Poppins font-semibold text-lg mb-1">{member.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        w-8 h-8
                        bg-cosmic-black text-secondary
                        border border-secondary/30
                        rounded-full
                        transition-colors
                        hover:bg-secondary hover:text-black
                      "
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-16 text-center">
          <div className="black-divider mb-6" />
          <p className="text-gray-300 mb-6">
            Interessado em fazer parte da nossa equipe? Estamos sempre abertos a novos talentos!
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector("#contato");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="
              cursor-pointer
              inline-block
              bg-secondary hover:bg-secondary/80
              text-cosmic-black font-medium
              py-3 px-8 rounded-md
              transition-transform transform hover:scale-105 shadow-dark
            "
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
