import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoBranca from '@/assets/logo-branca.svg';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen section-gradient-dark">
      <div className="container px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-dark hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <img src={logoBranca} alt="Feronti" className="h-8 mb-8" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Política de Cookies
            </h1>
            <p className="text-muted-dark">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. O que são Cookies?</h2>
              <p className="text-muted-dark leading-relaxed">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita 
                um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, 
                bem como para fornecer informações aos proprietários do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Como Utilizamos Cookies</h2>
              <p className="text-muted-dark leading-relaxed mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc list-inside text-muted-dark space-y-2">
                <li>Garantir o funcionamento adequado do site</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como você usa nosso site para melhorá-lo</li>
                <li>Personalizar sua experiência de navegação</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Cookies Essenciais</h3>
                  <p className="text-muted-dark leading-relaxed">
                    Necessários para o funcionamento básico do site. Sem esses cookies, o site não funcionaria corretamente.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Cookies de Desempenho</h3>
                  <p className="text-muted-dark leading-relaxed">
                    Coletam informações sobre como os visitantes usam o site, permitindo-nos melhorar sua experiência.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-muted-dark leading-relaxed">
                    Permitem que o site lembre de escolhas que você faz e forneça recursos aprimorados e personalizados.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Gerenciamento de Cookies</h2>
              <p className="text-muted-dark leading-relaxed">
                Você pode controlar e gerenciar cookies através das configurações do seu navegador. 
                A maioria dos navegadores permite que você recuse cookies ou exclua cookies existentes. 
                No entanto, se você optar por bloquear cookies, algumas funcionalidades do site podem não funcionar corretamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Cookies de Terceiros</h2>
              <p className="text-muted-dark leading-relaxed">
                Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas. 
                Não controlamos a disseminação desses cookies. Você deve verificar os sites desses terceiros 
                para obter mais informações sobre seus cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Atualizações desta Política</h2>
              <p className="text-muted-dark leading-relaxed">
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
                regularmente para estar ciente de quaisquer alterações.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Contato</h2>
              <p className="text-muted-dark leading-relaxed">
                Se você tiver dúvidas sobre nossa política de cookies, entre em contato conosco 
                através da nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
