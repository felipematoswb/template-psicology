import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto relative">
              <img 
                src="/img1.jpeg" 
                alt="Psicóloga Gabriely Feitosa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h4 className="text-sage-600 font-bold tracking-widest uppercase text-sm mb-2">Sobre Mim</h4>
              <h2 className="font-serif text-4xl text-stone-800 mb-1">Gabriely Feitosa dos Santos</h2>
              <p className="text-sage-600 font-semibold text-sm tracking-wide mb-6">Psicóloga | CRP 05/83811</p>
              
              <div className="space-y-6 text-stone-600 leading-relaxed font-light text-base overflow-y-auto max-h-[60vh] pr-2">
                <p>
                  Olá, sou Gabriely Feitosa dos Santos, psicóloga graduada pela Universidade Federal do Rio de Janeiro (UFRJ). Minha prática clínica é fundamentada no compromisso ético e no cuidado profundo com as singularidades de cada sujeito que recebo.
                </p>
                <p>
                  Acredito que ninguém existe de forma isolada. Por isso, pauto minha atuação em uma visão ampliada do ser humano, onde busco compreender o indivíduo para além do consultório. Em minha escuta, considero os atravessamentos de gênero, as questões raciais e as desigualdades sociais, analisando como esses contextos influenciam a construção da identidade e do sofrimento psíquico.
                </p>

                <h3 className="font-serif text-xl text-stone-800 mt-4">Trajetória e Formação</h3>
                <p>
                  Minha base de orientação teórica é a Fenomenologia Existencial, abordagem na qual atuei como monitora durante a graduação e que guia meu olhar para a existência humana como algo em constante construção. Para somar ferramentas práticas ao cuidado, estou cursando pós-graduação em Terapia Cognitivo-Comportamental (TCC) na PUC, integrando diferentes saberes para oferecer um suporte que respeite a sua história, sem fórmulas prontas ou metodologias rígidas.
                </p>
                <p>Ao longo da minha trajetória, percorri diferentes campos da psicologia:</p>
                <ul className="space-y-3 list-none">
                  <li><span className="font-semibold text-stone-700">Saúde Mental e Contextos Sociais:</span> Atuei no CAPS II, acompanhando pacientes com transtornos mentais graves, e na Vara da Infância, Juventude e do Idoso no Rio de Janeiro, onde refinei meu olhar para as vulnerabilidades e direitos humanos.</li>
                  <li><span className="font-semibold text-stone-700">Neurociências e Neurodiversidade:</span> Desenvolvi iniciação científica no Laboratório de Neurociências e Aprimoramento Cerebral do IPUB/UFRJ, focando na saúde cognitiva de idosos. Além disso, possuo experiência no trabalho com crianças neurodivergentes, sempre priorizando o respeito ao desenvolvimento individual.</li>
                  <li><span className="font-semibold text-stone-700">Trabalho e Organizações:</span> Tive passagens pela psicologia organizacional na Empresa Júnior Insight, o que me permitiu entender as dinâmicas de gestão de pessoas. Esse interesse se consolidou em meu TCC, onde pesquisei a relação entre o Burnout e a desigualdade de gênero.</li>
                </ul>

                <h3 className="font-serif text-xl text-stone-800 mt-4">Meu Propósito</h3>
                <p>
                  Meu objetivo principal é oferecer um espaço onde você possa se sentir seguro para explorar sua própria existência. Busco auxiliar meus pacientes a ressignificarem suas trajetórias e a lidarem com suas angústias de forma potente, para que possam ocupar seus lugares no mundo com mais autonomia e autenticidade.
                </p>
                <p>
                  Investir no processo terapêutico comigo é buscar o melhor da sua existência, em um encontro marcado pelo respeito, pela ética e pela consciência social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;