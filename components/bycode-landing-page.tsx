"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

function BycodeLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 overflow-hidden rounded-lg">
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <span className="text-[#1E3A8A] font-semibold text-xl tracking-tight">
        Bycode Labs
      </span>
    </div>
  )
}

// Founder Card Component
interface FounderCardProps {
  name: string
  description: string
  imageUrl?: string
  linkedinUrl?: string
  githubUrl?: string
}

function FounderCard({
  name,
  description,
  imageUrl,
  linkedinUrl = "#",
  githubUrl = "#",
}: FounderCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <Card className="bg-white border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-16 h-16 mb-4 ring-2 ring-[#60A5FA]/20">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-[#1E3A8A] mb-1">{name}</h3>
          <p className="text-sm text-[#2563EB] font-medium mb-4">Co-founder</p>
          <p className="text-sm text-[#374151] leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex gap-4">
            <a
              href={linkedinUrl}
              className="text-[#9CA3AF] hover:text-[#2563EB] transition-colors"
              aria-label={`LinkedIn de ${name}`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={githubUrl}
              className="text-[#9CA3AF] hover:text-[#2563EB] transition-colors"
              aria-label={`GitHub de ${name}`}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Section Wrapper Component
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>{children}</section>
  )
}

// Main Landing Page Component
export default function BycodeLandingPage() {
  const founders = [
    {
      name: "Marlon de Souza",
      description:
        "Marlon de Souza é co-founder da Bycode Labs e engenheiro de software com foco em soluções de inteligência artificial e ciência de dados. Sua trajetória é marcada pelo interesse em projetos aplicados, especialmente na interface entre tecnologia e genética, com destaque para o desenvolvimento de um pipeline de IA voltado à classificação de variantes nos genes supressores de tumor do câncer de mama. Na Bycode Labs, leva essa visão para a construção de soluções inovadoras, bem estruturadas e orientadas por qualidade, sempre com atenção à confiabilidade e ao valor prático de cada entrega.",
      imageUrl: "/marlon.jpg",
      linkedinUrl: "https://www.linkedin.com/in/marlon-de-souza-software-engineer/",
      githubUrl: "https://github.com/Marlon-Souza16"
    },
    {
      name: "Cristian Prochnow",
      description:
        "Cristian Prochnow é co-founder da Bycode Labs e engenheiro de software com atuação destacada em front-end, unindo visão de interface, experiência de usuário e construção de produtos digitais bem estruturados. Ao mesmo tempo, sua base full stack e sua facilidade com lógica, desenvolvimento e visão estratégica ampliam sua contribuição ao longo de todo o projeto, conectando qualidade técnica, clareza de implementação e consistência na entrega.",
      imageUrl: "/cristian.jpg",
      linkedinUrl: "https://www.linkedin.com/in/cristianprochnow/",
      githubUrl: "https://github.com/cristianprochnow"
    },
    {
      name: "Lucas Willian",
      description:
        "Lucas Willian é co-founder da Bycode Labs e engenheiro de software com atuação voltada ao desenvolvimento back-end e à construção de soluções bem estruturadas. Sua trajetória reúne base técnica sólida, olhar para arquitetura e uma forma estratégica de pensar desenvolvimento, sempre buscando unir organização, clareza e consistência em cada projeto. Na Bycode Labs, contribui para a criação de soluções confiáveis, escaláveis e alinhadas às necessidades reais de cada entrega.",
      imageUrl: "/lucas.jpg",
      linkedinUrl: "https://www.linkedin.com/in/lucas-willian-22a437240/",
      githubUrl: "https://github.com/Lucaswillians"
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F8FAFC]">
      {/* Blueprint Background Image with B watermark */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/bycode-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Logo Only */}
        <header className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <BycodeLogo />
          </div>
        </header>

        {/* Hero Section */}
        <Section className="pt-8 md:pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A8A] leading-tight mb-6 text-balance">
                Transformamos desafios complexos em soluções digitais claras,
                escaláveis e orientadas por resultados.
              </h1>
              <p className="text-lg md:text-xl text-[#374151] mb-8 text-pretty">
                Engenharia de software, inteligência aplicada e produtos
                digitais sob medida.
              </p>

              {/* Gradient Line Accent */}
              <div className="flex justify-center mb-8">
                <div className="h-1 w-24 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] rounded-full" />
              </div>

              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Arquitetura", "IA aplicada", "Produtos"].map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 text-sm font-medium text-[#2563EB] bg-white border border-[#E5E7EB] rounded-full shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* About Section - Posicionamento */}
        <Section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] sticky top-8">
                  Sobre a Bycode Labs
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                  A Bycode Labs é uma empresa de engenharia de software e
                  inteligência aplicada que transforma desafios complexos em
                  soluções digitais claras, escaláveis e orientadas por
                  resultado. Atuamos no desenvolvimento de sistemas sob medida,
                  produtos digitais, automações, APIs, dashboards e soluções com
                  IA, sempre com foco em utilidade prática, qualidade técnica e
                  aderência ao contexto real de cada projeto.
                </p>
                <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                  Mais do que desenvolver software, buscamos estruturar soluções
                  que façam sentido no negócio e possam evoluir com consistência
                  ao longo do tempo. Unimos visão de produto, arquitetura,
                  desenvolvimento e dados para entregar ferramentas confiáveis,
                  auditáveis e preparadas para crescer, evitando tecnologia pela
                  tecnologia e priorizando aquilo que realmente gera valor.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Nosso Objetivo Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-6">
            <Card className="bg-white border-[#E5E7EB] shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]" />
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-6">
                  Nosso objetivo
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                    Na Bycode Labs, nosso objetivo é ajudar empresas a
                    transformar desafios, processos e oportunidades em soluções
                    digitais bem construídas, capazes de gerar eficiência,
                    escala e vantagem competitiva. Atuamos lado a lado com cada
                    cliente para estruturar, desenvolver e evoluir sistemas,
                    plataformas e produtos que atendam necessidades reais do
                    negócio, com qualidade técnica e visão de longo prazo.
                  </p>
                  <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                    Mais do que entregar software, buscamos construir soluções
                    que tragam resultado prático, sustentem crescimento e
                    acompanhem a evolução da operação. Nosso foco está em criar
                    tecnologia sob medida, com clareza, consistência e valor,
                    conectando estratégia, produto e engenharia para que cada
                    projeto saia do papel com solidez e potencial de expansão.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Nosso Propósito Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-6">
            <Card className="bg-white border-[#E5E7EB] shadow-sm overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]" />
              <CardContent className="p-8 md:p-12 pl-10 md:pl-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A]">
                    Nosso propósito
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                    Na Bycode Labs, nosso propósito é construir tecnologia que
                    faça sentido para as pessoas e gere valor real para os
                    negócios. Acreditamos que boas soluções digitais devem
                    simplificar caminhos, apoiar crescimento e transformar
                    ideias em algo concreto, útil e duradouro.
                  </p>
                  <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                    Mais do que desenvolver sistemas, queremos criar soluções
                    que ajudem empresas a evoluir com clareza, confiança e
                    consistência, sempre unindo proximidade, visão e qualidade
                    em cada projeto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Nossa História Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-6">
                  Nossa história
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                    A Bycode Labs nasceu da parceria entre três engenheiros de
                    software que se conheceram durante a graduação na Católica.
                    Ao longo do curso, entre projetos, trabalhos e desafios em
                    conjunto, o que começou no ambiente acadêmico se transformou
                    em uma amizade sólida e em uma forma muito alinhada de
                    pensar tecnologia, qualidade e construção.
                  </p>
                  <p className="text-base md:text-lg text-[#374151] leading-relaxed">
                    Após a formatura, essa base deu origem à empresa. A ideia
                    era transformar conhecimento técnico em soluções reais,
                    desenvolvidas com cuidado, qualidade e visão de longo prazo.
                    Desde o início, a Bycode Labs foi pensada para refletir
                    aquilo que sempre fez parte do grupo: o compromisso de
                    construir projetos bem feitos, confiáveis e com alto padrão
                    de entrega, porque para nós, excelência nunca foi detalhe,
                    mas sim um princípio.
                  </p>
                </div>
              </div>

              {/* Timeline Marker */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#2563EB] to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-2 border-[#2563EB] flex items-center justify-center bg-white">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Sócios Section */}
        <Section className="bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-4">
                Sócios
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] rounded-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder) => (
                <FounderCard
                  key={founder.name}
                  name={founder.name}
                  description={founder.description}
                  imageUrl={founder.imageUrl}
                  linkedinUrl={founder.linkedinUrl}
                  githubUrl={founder.githubUrl}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#E5E7EB] bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-[#374151]">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a
                  href="mailto:contato@bycodelabs.com.br"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  contato@bycodelabs.com.br
                </a>
              </div>
              <p className="text-sm text-[#9CA3AF]">
                © Bycode Labs — Todos os direitos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
