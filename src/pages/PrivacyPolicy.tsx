import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoBranca from '@/assets/logo-branca.svg';

const PrivacyPolicy = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-muted-dark">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Informações Gerais</h2>
              <p className="text-muted-dark leading-relaxed">
                A Feronti Group está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                quando você utiliza nosso site e serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Dados Coletados</h2>
              <p className="text-muted-dark leading-relaxed mb-4">
                Podemos coletar os seguintes tipos de dados pessoais:
              </p>
              <ul className="list-disc list-inside text-muted-dark space-y-2">
                <li>Nome e informações de contato (e-mail, telefone)</li>
                <li>Informações profissionais (empresa, cargo)</li>
                <li>Dados de navegação e uso do site</li>
                <li>Informações fornecidas em formulários de contato</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-muted-dark leading-relaxed mb-4">
                Utilizamos seus dados pessoais para:
              </p>
              <ul className="list-disc list-inside text-muted-dark space-y-2">
                <li>Responder a solicitações e dúvidas</li>
                <li>Enviar comunicações relevantes sobre nossos serviços</li>
                <li>Melhorar a experiência de navegação</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-dark leading-relaxed">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. 
                Podemos compartilhar informações apenas com prestadores de serviços que nos auxiliam na operação 
                do site, sempre sob obrigações de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-dark leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Seus Direitos</h2>
              <p className="text-muted-dark leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-dark space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Contato</h2>
              <p className="text-muted-dark leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco 
                através da nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
