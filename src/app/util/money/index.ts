/**
 * Converte uma string de moeda formatada (ex: "R$ 1.234,56") para um número (ex: 1234.56).
 * É robusto o suficiente para lidar com valores que já são apenas números.
 * @param value A string de moeda a ser convertida.
 * @returns O valor numérico.
 */
export const converterEmbigDecimal = (value: string): number => {
  if (!value) {
    return 0;
  }

  // Remove tudo que não for dígito ou vírgula, depois troca a vírgula por ponto.
  const numeroComoString = value
    .replace(/[^\d,]/g, '')
    .replace(',', '.');

  const parsed = parseFloat(numeroComoString);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Formata um número ou uma string numérica para o formato de moeda brasileira (BRL).
 * @param valor O valor a ser formatado.
 * @returns Uma string formatada como "R$ 1.234,56".
 */
export const formatReal = (valor: number | string | undefined | null): string => {
  // Garante que estamos trabalhando com um número antes de formatar.
  const valorNumerico = typeof valor === 'string' ? converterEmbigDecimal(valor) : Number(valor) || 0;
  
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(valorNumerico);
}