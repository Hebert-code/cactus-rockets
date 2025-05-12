interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const blogPosts : BlogPost[] = [
    {
      id: 1,
      title: "Lançamento do foguete Caatinga na competição nacional",
      excerpt: "Detalhes sobre nosso mais recente lançamento e os resultados obtidos na competição nacional de foguetes.",
      date: "15 Mar 2023",
      image: "/placeholder.svg",
      category: "Competição"
    },
    {
      id: 2,
      title: "Oficina de propulsão para estudantes do ensino médio",
      excerpt: "Evento realizado no campus da UNIVASF com alunos do ensino médio para demonstração de princípios de propulsão.",
      date: "28 Jan 2023",
      image: "/placeholder.svg",
      category: "Extensão"
    },
    {
      id: 3,
      title: "Desenvolvimento do novo sistema de telemetria",
      excerpt: "Detalhes técnicos sobre o novo sistema de telemetria em desenvolvimento pela nossa equipe de eletrônica.",
      date: "12 Dez 2022",
      image: "/placeholder.svg",
      category: "Tecnologia"
    },
    {
      id: 4,
      title: "Participação na feira de ciências regional",
      excerpt: "Levamos nossos projetos para a feira de ciências e inspiramos jovens da região a explorarem o espaço.",
      date: "05 Nov 2022",
      image: "/placeholder.svg",
      category: "Eventos"
    }
]