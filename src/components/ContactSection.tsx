import React from 'react';
import { 
    MapPin, 
    Mail, 
    Phone, 
    Linkedin, 
    Youtube,
    Instagram,
} from 'lucide-react';
import StarBackground from './ui/StarBackground';
import SectionTitle from './ui/SectionTitle';

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <section
            id="contato"
            className="relative bg-[linear-gradient(to_bottom,_#080808,_#0A3622)] text-white px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-20 lg:py-24"
        >
            <StarBackground />

            <div className="container mx-auto">
                <div className="relative z-10">

                    <SectionTitle
                        title="Entre em Contato"
                        subtitle="Tem uma pergunta ou proposta de parceria? Entre em contato conosco."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Formulário */}
                        <div className="backdrop-blur-sm bg-muted/20 p-6 sm:p-8 rounded-lg border border-white/10 hover:border-secondary/30 transition-all">
                            <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                                Envie uma mensagem
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                            Nome completo
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 bg-muted/30 text-white border border-white/20 rounded-md focus:ring-secondary focus:border-secondary placeholder-gray-500"
                                            placeholder="Seu nome"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 bg-muted/30 text-white border border-white/20 rounded-md focus:ring-secondary focus:border-secondary placeholder-gray-500"
                                            placeholder="seu.email@exemplo.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                                        Assunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 bg-muted/30 text-white border border-white/20 rounded-md focus:ring-secondary focus:border-secondary placeholder-gray-500"
                                        placeholder="Como podemos ajudar?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-5 bg-muted/30 text-white border border-white/20 rounded-md focus:ring-secondary focus:border-secondary resize-none placeholder-gray-500"
                                        placeholder="Escreva sua mensagem..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="text-center sm:text-left mt-8">
                                    <button className="inline-flex justify-center items-center gap-2 px-8 py-3 border bg-secondary hover:bg-secondary/80 rounded text-black">
                                        Enviar Mensagem
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Informações de Contato */}
                        <div>
                            <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                                Informações de Contato
                            </h3>

                            <div className="bg-muted/20 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-8 hover:border-secondary/30 transition-all">
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-muted/30 p-3 rounded-full border border-white/10">
                                            <MapPin className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-medium text-white">Endereço</h4>
                                            <p className="text-gray-300 mt-1">
                                                UNIVASF - Campus Juazeiro<br />
                                                Av. Antônio Carlos Magalhães, 510<br />
                                                Juazeiro-BA, 48902-300, Brasil
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-muted/30 p-3 rounded-full border border-white/10">
                                            <Mail className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-medium text-white">Email</h4>
                                                <p className="text-gray-300 mt-1 break-all">
                                                    cactusrockets@univasf.edu.br
                                                </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-muted/30 p-3 rounded-full border border-white/10">
                                            <Phone className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-medium text-white">Telefone</h4>
                                            <p className="text-gray-300 mt-1">
                                                +55 (87) 999557500 (José Neto)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="font-semibold text-lg text-white mb-4">
                                Siga-nos nas redes sociais
                            </h4>

                            <div className="flex space-x-4 mb-8">
                                <a
                                    href="https://www.linkedin.com/company/cactus-rockets-design-crd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-muted/30 text-secondary border border-white/10 rounded-full hover:bg-secondary hover:text-black transition-all"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/cactusrockets/#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-muted/30 text-secondary border border-white/10 rounded-full hover:bg-secondary hover:text-black transition-all"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.youtube.com/@cactusrocketsdesign/about"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-muted/30 text-secondary border border-white/10 rounded-full hover:bg-secondary hover:text-black transition-all"
                                >
                                    <Youtube size={20} />
                                </a>
                            </div>

                            {/* Mapa */}
                            <div className="mt-8 bg-muted/30 rounded-lg h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center border border-white/10 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300"></div>
                                <p className="text-gray-400 font-medium z-10 group-hover:opacity-0 transition-opacity duration-300">Mapa do Local</p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.334680382746!2d-40.51809105695272!3d-9.413583215283854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7737101c85e67c7%3A0xdd74eef9bcbe54a6!2sBiblioteca%20da%20UNIVASF!5e1!3m2!1spt-BR!2sbr!4v1747012848971!5m2!1spt-BR!2sbr"
                                    className="absolute inset-0 w-full h-full border-0 z-0"
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
