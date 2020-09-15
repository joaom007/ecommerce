import {
  lrea1e,
  lrea2e,
  lrebi,
  lrebp,
  lrecm,
  lrepsg,
  lret,
  lreve,
  lrevu,
  bsea1e,
  bsea2e,
  bsebi,
  bsebp,
  bsecm,
  bsemt,
  bsesg,
  bseve,
  bsevu,
  bssa1e,
  bssa2e,
  bssbi,
  bssbp,
  bsscm,
  bssmt,
  bsssg,
  bssve,
  bssvu,
  pirba,
  pirbi,
  pirsg,
  pirvu,
} from './products-images/index'

export const handleImage = (link) => {
  //Lavatório Reto embutida
  if (link === 'lrea1e') return lrea1e //lavatorio-reto-embutida-amarelo-estelar
  if (link === 'lrea2e') return lrea2e //lavatorio-reto-embutida-azul-estelar
  if (link === 'lrebi') return lrebi //lavatorio-reto-embutida- branco-itaúnas
  if (link === 'lrebp') return lrebp //lavatorio-reto-embutida-branco-prime
  if (link === 'lrecm') return lrecm //lavatorio-reto-embutida-crema-marfil
  if (link === 'lrepsg') return lrepsg //lavatorio-reto-embutida-preto-são-gabriel
  if (link === 'lret') return lret //lavatorio-reto-embutida-travertino
  if (link === 'lreve') return lreve //lavatorio-reto-embutida-verde-ubatuba
  if (link === 'lrevu') return lrevu //lavatorio-reto-embutida-vermelho-estelar

  //Lavatório Saia Esculpida
  if (link === 'bsea1e') return bsea1e //Bancada Saia Esculpida - Amarelo Estelar
  if (link === 'bsea2e') return bsea2e //Bancada Saia Esculpida - Azul Estelar
  if (link === 'bsebi') return bsebi //Bancada Saia Esculpida - Branco Itaúnas
  if (link === 'bsebp') return bsebp //Bancada Saia Esculpida - Branco Prime
  if (link === 'bsecm') return bsecm //Bancada Saia Esculpida - Crema Marfil
  if (link === 'bsemt') return bsemt //Bancada Saia Esculpida - Mármore Travertino
  if (link === 'bsesg') return bsesg //Bancada Saia Esculpida - São Gabriel
  if (link === 'bseve') return bseve //Bancada Saia Esculpida - Verde Ubatuba
  if (link === 'bsevu') return bsevu //Bancada Saia Esculpida - Vermelho Estelar

  //Lavatório Saia Sobreposta
  if (link === 'bssa1e') return bssa1e //Bancada Saia Sobreposta - Amarelo Estelar
  if (link === 'bssa2e') return bssa2e //Bancada Saia Sobreposta - Azul Estelar
  if (link === 'bssbi') return bssbi //Bancada Saia Sobreposta - Branco Itaúnas
  if (link === 'bssbp') return bssbp //Bancada Saia Sobreposta - Branco Prime
  if (link === 'bsscm') return bsscm //Bancada Saia Sobreposta - Crema Marfil
  if (link === 'bssmt') return bssmt //Bancada Saia Sobreposta - Mármore Travertino
  if (link === 'bsssg') return bsssg //Bancada Saia Sobreposta - São Gabriel
  if (link === 'bssve') return bssve //Bancada Saia Sobreposta - Verde Ubatuba
  if (link === 'bssvu') return bssvu //Bancada Saia Sobreposta - Vermelho Estelar

  //Pia Reto Inox
  if (link === 'pirba') return pirba //Pia 57 Reto - Bege Arabesco
  if (link === 'pirbi') return pirbi //Pia 57 Reto - Branco Itaúnas
  if (link === 'pirsg') return pirsg //Pia 57 Reto - São Gabriel
  if (link === 'pirvu') return pirvu //Pia 57 Reto - Verde Ubatuba
}
