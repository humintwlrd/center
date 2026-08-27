import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Política de Privacidade · Mundo da HUMINT",
  description:
    "Como o Mundo da HUMINT coleta, usa, armazena e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
}

export default function PrivacidadePage() {
  return (
    <LegalPage eyebrow="/ Documento legal" title="Política de Privacidade" updatedAt="4 de junho de 2026">
      <p>
        Esta Política de Privacidade descreve como o <strong>Mundo da HUMINT</strong> (&quot;nós&quot;) coleta,
        utiliza, armazena e protege os dados pessoais dos usuários do site{" "}
        <a href="https://humint.click">humint.click</a> e do Acervo Tático HUMINT, em conformidade com a{" "}
        <strong>Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018)</strong>.
      </p>

      <h2>1. Dados que coletamos</h2>
      <h3>Dados fornecidos por você</h3>
      <ul>
        <li>Nome, e-mail e telefone, quando informados na compra ou em formulários de contato;</li>
        <li>
          Dados de pagamento, processados diretamente pela plataforma de pagamento parceira — nós{" "}
          <strong>não armazenamos</strong> dados completos de cartão de crédito.
        </li>
      </ul>
      <h3>Dados coletados automaticamente</h3>
      <ul>
        <li>Endereço IP, tipo de navegador, dispositivo e sistema operacional;</li>
        <li>Páginas visitadas, tempo de navegação e interações com o site;</li>
        <li>
          Parâmetros de origem e marketing (UTMs) e identificadores de cookies para fins de análise e
          atribuição de campanhas.
        </li>
      </ul>

      <h2>2. Como utilizamos seus dados</h2>
      <ul>
        <li>Processar sua compra e liberar o acesso ao Produto;</li>
        <li>Fornecer suporte e responder a solicitações;</li>
        <li>Enviar comunicações sobre o Produto, atualizações e ofertas (quando autorizado);</li>
        <li>Mensurar a eficácia de campanhas de marketing e melhorar a experiência do site;</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>3. Cookies e tecnologias de rastreamento</h2>
      <p>
        Utilizamos cookies e tecnologias semelhantes, incluindo ferramentas de terceiros como{" "}
        <strong>Utmify</strong> e o <strong>Meta Pixel</strong>, para análise de tráfego, atribuição de
        campanhas e remarketing. Você pode gerenciar ou desativar cookies nas configurações do seu navegador,
        ciente de que isso pode afetar algumas funcionalidades.
      </p>

      <h2>4. Compartilhamento de dados</h2>
      <p>
        Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com:
      </p>
      <ul>
        <li>Plataformas de pagamento, para processar transações;</li>
        <li>Plataforma de hospedagem da área de membros, para liberar seu acesso;</li>
        <li>Ferramentas de análise e publicidade (ex.: Meta, Utmify), de forma pseudonimizada quando possível;</li>
        <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
      </ul>

      <h2>5. Seus direitos como titular</h2>
      <p>Nos termos da LGPD, você pode, a qualquer momento, solicitar:</p>
      <ul>
        <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>Portabilidade e informação sobre compartilhamento;</li>
        <li>Revogação do consentimento e eliminação dos dados tratados com base nele.</li>
      </ul>
      <p>
        Para exercer seus direitos, entre em contato pelo e-mail{" "}
        <a href="mailto:contato@humint.click">contato@humint.click</a>.
      </p>

      <h2>6. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não
        autorizado, perda ou destruição. Os dados são mantidos apenas pelo tempo necessário às finalidades
        descritas ou conforme exigido por lei.
      </p>

      <h2>7. Alterações desta Política</h2>
      <p>
        Esta Política pode ser atualizada periodicamente. A versão vigente será sempre a publicada nesta página,
        com a respectiva data de atualização.
      </p>

      <h2>8. Encarregado e contato</h2>
      <p>
        Para questões relacionadas à privacidade e proteção de dados, entre em contato com nosso canal de
        atendimento pelo e-mail <a href="mailto:contato@humint.click">contato@humint.click</a>.
      </p>
    </LegalPage>
  )
}
