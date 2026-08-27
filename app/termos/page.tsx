import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Termos de Uso · Mundo da HUMINT",
  description:
    "Termos e condições de uso do Acervo Tático HUMINT — regras de acesso, licença de uso, pagamento, garantia e responsabilidades.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
}

export default function TermosPage() {
  return (
    <LegalPage eyebrow="/ Documento legal" title="Termos de Uso" updatedAt="4 de junho de 2026">
      <p>
        Estes Termos de Uso (&quot;Termos&quot;) regem o acesso e a utilização do{" "}
        <strong>Acervo Tático HUMINT</strong> (&quot;Produto&quot;), um material digital educacional
        disponibilizado pelo <strong>Mundo da HUMINT</strong> (&quot;nós&quot;) por meio do site{" "}
        <a href="https://humint.click">humint.click</a>. Ao realizar a compra e/ou acessar o Produto, você
        (&quot;Usuário&quot;) declara ter lido, compreendido e concordado integralmente com estes Termos.
      </p>

      <h2>1. Objeto</h2>
      <p>
        O Produto consiste em um acervo digital de conteúdo educacional sobre Inteligência Humana (HUMINT),
        incluindo dossiês, materiais escritos e recursos correlatos, hospedados em uma área de membros online. O
        conteúdo tem finalidade exclusivamente <strong>informativa e educacional</strong>.
      </p>

      <h2>2. Cadastro e acesso</h2>
      <ul>
        <li>
          O acesso ao Produto é pessoal e intransferível, liberado após a confirmação do pagamento pela
          plataforma de pagamento responsável.
        </li>
        <li>
          O Usuário é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as
          atividades realizadas em sua conta.
        </li>
        <li>
          É vedado o compartilhamento de login, a revenda ou a cessão do acesso a terceiros.
        </li>
      </ul>

      <h2>3. Licença de uso e propriedade intelectual</h2>
      <p>
        Todo o conteúdo do Produto é protegido por direitos autorais e demais leis de propriedade intelectual.
        A compra concede ao Usuário uma <strong>licença limitada, pessoal, não exclusiva e intransferível</strong>{" "}
        para acesso e consumo do conteúdo para fins próprios e não comerciais.
      </p>
      <p>É expressamente proibido, sem autorização prévia e por escrito:</p>
      <ul>
        <li>Copiar, reproduzir, distribuir, publicar ou exibir publicamente o conteúdo;</li>
        <li>Comercializar, sublicenciar, alugar ou ceder o material, no todo ou em parte;</li>
        <li>Realizar engenharia reversa, gravar ou extrair os materiais para redistribuição.</li>
      </ul>

      <h2>4. Pagamento</h2>
      <p>
        Os pagamentos são processados por plataforma de terceiros (gateway de pagamento). Os valores, formas de
        parcelamento e condições são exibidos no momento da compra. A liberação do acesso ocorre após a
        confirmação da transação pela plataforma.
      </p>

      <h2>5. Direito de arrependimento e garantia</h2>
      <p>
        Em conformidade com o art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990), o Usuário pode
        desistir da compra no prazo de <strong>7 (sete) dias corridos</strong> contados a partir da
        confirmação do pagamento, com direito ao reembolso integral do valor pago. Para solicitar, basta entrar em
        contato pelo e-mail <a href="mailto:contato@humint.click">contato@humint.click</a>.
      </p>

      <h2>6. Natureza do conteúdo e isenção de responsabilidade</h2>
      <p>
        O conteúdo é de caráter educacional e <strong>não constitui</strong> aconselhamento jurídico,
        psicológico, médico, financeiro ou profissional de qualquer natureza. Os resultados decorrentes da
        aplicação do material dependem de fatores individuais, e não há garantia de resultados específicos.
      </p>
      <p>
        O Usuário compromete-se a utilizar o conhecimento adquirido de forma <strong>ética e lícita</strong>,
        sendo o único responsável por seus atos. O Mundo da HUMINT não se responsabiliza por uso indevido,
        antiético ou ilegal do conteúdo.
      </p>

      <h2>7. Disponibilidade</h2>
      <p>
        Empregamos esforços razoáveis para manter o acervo disponível de forma contínua, mas não garantimos
        funcionamento ininterrupto, podendo haver manutenções, atualizações ou indisponibilidades temporárias.
      </p>

      <h2>8. Alterações dos Termos</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A versão vigente será sempre a publicada nesta
        página, com a respectiva data de atualização. O uso continuado do Produto após alterações implica
        concordância com os novos Termos.
      </p>

      <h2>9. Foro e legislação aplicável</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do domicílio
        do Usuário para dirimir eventuais controvérsias, conforme previsto na legislação consumerista.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser encaminhadas para{" "}
        <a href="mailto:contato@humint.click">contato@humint.click</a>.
      </p>
    </LegalPage>
  )
}
