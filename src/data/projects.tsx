interface Projects {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const projects : Projects[] = [
    {
    id: 1,
    title: "Foguete Mandacaru I",
    description: "Primeiro protótipo desenvolvido pela equipe, participou da competição nacional em 2019.",
    category: "Foguete Experimental",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Foguete Sertão",
    description: "Modelo aprimorado com altímetro e sistema de recuperação avançado.",
    category: "Foguete de Competição",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Foguete Caatinga",
    description: "Projeto mais recente com motor de classe G e telemetria em tempo real.",
    category: "Foguete de Alta Performance",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Foguete Mandacaru II",
    description: "Evolução do primeiro Mandacaru, com novos testes de estabilidade.",
    category: "Foguete Experimental",
    image: "/placeholder.svg"
  }
]