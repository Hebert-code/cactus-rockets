import React from 'react';
import { 
    MapPin, 
    Mail, 
    Phone, 
    Linkedin, 
    Youtube ,
    Instagram,
} from 'lucide-react';
import { useEffect, useState } from "react";

const ContactSection = () => {

    const [stars, setStars] = useState<Array<{
        id: number;
        x: number;
        y: number;
        size: number;
        opacity: number;
        delay: number;
    }>>([]);

    useEffect(() => {
        const createStars = () => {
            const starsArray = [];
            const starCount = 100;

            for (let i = 0; i < starCount; i++) {
                starsArray.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.7 + 0.3,
                    delay: Math.random() * 3,
                });
            }

            setStars(starsArray);
        };

        createStars();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return(
        <section id='contato' className=" relative bg-[linear-gradient(to_bottom,_#080808,_#0A3622)] text-white p-24">

            <div className="absolute inset-0 z-0 pointer-events-none">
            {stars.map((star) => (
                <div
                key={star.id}
                className="absolute rounded-full animate-twinkle"
                style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    backgroundColor: 'white',
                    opacity: star.opacity,
                    animationDelay: `${star.delay}s`
                }}
                />
            ))}
            </div>


            <div className=" container mx-auto px-4">
                <div className="container mx-auto container-padding relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-Poppins font-bold text-3xl md:text-4xl text-white mb-4 relative">
                            <span className="relative z-10">Entre em Contato</span>
                            <div className=" absolute w-20 h-1 bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 mt-5"></div>
                        </h2>
                        <p className="text-gray-300 mt-8">Tem uma pergunta ou proposta de parceria? Entre em contato conosco.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                    <div className="backdrop-blur-sm bg-muted/20 p-8 rounded-lg border border-white/10 hover:border-secondary/30 transition-all">
                        <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                        Envie uma mensagem
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            className="w-full px-4 py-3 bg-muted/30 text-white border border-white/20 rounded-md focus:ring-secondary focus:border-secondary resize-none placeholder-gray-500"
                            placeholder="Escreva sua mensagem..."
                            required
                            ></textarea>
                        </div>
                        

                        <div className="text-center mt-12">
                            <button className="inline-flex items-center gap-2 px-8 py-3 border bg-secondary hover:bg-secondary/80  rounded  text-black">
                                Enviar Mensagem
                            </button>
                        </div>
                        </form>
                    </div>
                    
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
                                <p className="text-gray-300 mt-1">
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
                        
                        {/* Map placeholder */}
                        <div className="mt-8 bg-muted/30 rounded-lg h-[200px] flex items-center justify-center border border-white/10 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300"></div>
                        <p className="text-gray-400 font-medium z-10 group-hover:opacity-0 transition-opacity duration-300">Mapa do Local</p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.2417960048695!2d-40.53429132589503!3d-9.400951791058267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7735226877b09af%3A0x3bb83e09a1e9f0e2!2sUniversidade%20Federal%20do%20Vale%20do%20S%C3%A3o%20Francisco%20-%20Campus%20Juazeiro!5e0!3m2!1spt-BR!2sbr!4v1714584949682!5m2!1spt-BR!2sbr"
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
    )
}

export default ContactSection