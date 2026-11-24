const form = document.querySelector("#fuel-form");
const sessaoInput = document.querySelector("#sessao-nome");
const voltasInput = document.querySelector("#voltas");
const consumoInput = document.querySelector("#consumo");
const resultadoBox = document.querySelector("#resultado-box");

function parsePositiveNumber(rawValue, fieldLabel, min, max, integerOnly = false) {
  const normalized = String(rawValue ?? "").trim().replace(",", ".");

  if (normalized === "") {
    throw new Error(`O campo "${fieldLabel}" está vazio. Preenche um valor antes de enviar.`);
  }

  const parsed = Number(normalized);

  if (!Number.isFinite(parsed) || Number.isNaN(parsed)) {
    throw new Error(`O campo "${fieldLabel}" deve conter um número válido.`);
  }

  if (integerOnly && !Number.isInteger(parsed)) {
    throw new Error(`O campo "${fieldLabel}" deve ser um número inteiro (sem casas decimais).`);
  }

  if (parsed < min || parsed > max) {
    throw new Error(
      `O campo "${fieldLabel}" deve estar entre ${min} e ${max} (valor recebido: ${parsed}).`
    );
  }

  return parsed;
}

function renderFeedback(type, htmlContent) {
  resultadoBox.hidden = false;
  resultadoBox.classList.remove("feedback-error", "feedback-success");
  resultadoBox.classList.add(type === "error" ? "feedback-error" : "feedback-success");
  resultadoBox.innerHTML = htmlContent;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const nomeSessao = sessaoInput.value.trim();
    if (!nomeSessao) {
      throw new Error("Indica a identificação da sessão ou piloto antes de calcular.");
    }

    const voltas = parsePositiveNumber(voltasInput.value, "Número de voltas", 1, 100, true);
    const consumoPorVolta = parsePositiveNumber(
      consumoInput.value,
      "Consumo por volta em litros",
      0.5,
      10,
      false
    );

    const combustivelBase = voltas * consumoPorVolta;
    const margemSeguranca = combustivelBase * 0.05;
    const totalRecomendado = combustivelBase + margemSeguranca;

    renderFeedback(
      "success",
      `<strong>Sessão:</strong> ${escapeHtml(nomeSessao)}<br />
       <strong>Combustível base (${voltas} voltas):</strong> ${combustivelBase.toFixed(2)} L<br />
       <strong>Margem de segurança (5%):</strong> ${margemSeguranca.toFixed(2)} L<br />
       <strong>Total recomendado no tanque:</strong> ${totalRecomendado.toFixed(2)} L`
    );
  } catch (error) {
    const mensagemErro =
      error instanceof Error ? error.message : "Ocorreu um erro inesperado ao validar os dados.";

    renderFeedback("error", `<strong>Não foi possível calcular:</strong> ${escapeHtml(mensagemErro)}`);
  }
});

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
