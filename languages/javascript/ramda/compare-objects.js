const R = require('ramda')
const fs = require('fs')

const lerArquivoJSON = (caminho) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(caminho, 'utf-8')
    return JSON.parse(conteudoDoArquivo)
  } catch (erro) {
    console.error('Erro ao ler o arquivo JSON:', erro)
    return null
  }
}

const plan1 = lerArquivoJSON('./old_plans/2023-11-21-blackton_dez22.json')
const plan2 = lerArquivoJSON('./old_plans/2023-11-21-blackton_nov22.json')
const plan3 = lerArquivoJSON(
  './old_plans/2023-11-21-blackton_tier_base_nov23.json'
)
const plan4 = lerArquivoJSON(
  './old_plans/2023-11-21-blackton_tier_promo_nov23.json'
)
const plan5 = lerArquivoJSON(
  './old_plans/2023-11-21-blackton_tier_regular_nov23.json'
)
const plan6 = lerArquivoJSON('./old_plans/2023-11-21-gigaton_ago22.json')
const plan7 = lerArquivoJSON('./old_plans/2023-11-21-gigaton_dez21.json')
const plan8 = lerArquivoJSON('./old_plans/2023-11-21-gigaton_mar22.json')
const plan9 = lerArquivoJSON('./old_plans/2023-11-21-gigaton_tier_base.json')
const plan10 = lerArquivoJSON(
  './old_plans/2023-11-21-gigaton_tier_regular.json'
)
const plan11 = lerArquivoJSON('./old_plans/2023-11-21-megaton_ago22.json')
const plan12 = lerArquivoJSON('./old_plans/2023-11-21-megaton_dez21.json')
const plan13 = lerArquivoJSON('./old_plans/2023-11-21-megaton_mar22.json')
const plan14 = lerArquivoJSON('./old_plans/2023-11-21-megaton_tier_base.json')
const plan15 = lerArquivoJSON(
  './old_plans/2023-11-21-megaton_tier_regular.json'
)
const plan16 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_base_maio23.json'
)
const plan17 = lerArquivoJSON('./old_plans/2023-11-21-promoton_tier_base.json')
const plan18 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_promo_ago23.json'
)
const plan19 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_promo_maio23.json'
)
const plan20 = lerArquivoJSON('./old_plans/2023-11-21-promoton_tier_promo.json')
const plan21 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_regular_maio23_fds_0bps.json'
)
const plan22 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_regular_maio23_fds_25bps.json'
)
const plan23 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_regular_maio23_fds_50bps.json'
)
const plan24 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_regular_maio23_fds_75bps.json'
)
const plan25 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_regular_maio23.json'
)
const plan26 = lerArquivoJSON(
  './old_plans/2023-11-21-promoton_tier_regular.json'
)
const plan27 = lerArquivoJSON('./old_plans/2023-11-21-tonbase_out21.json')
const plan28 = lerArquivoJSON('./old_plans/2023-11-21-tonbase_tier.json')
const plan29 = lerArquivoJSON('./old_plans/2023-11-21-tonbase.json')
const plan30 = lerArquivoJSON('./old_plans/2023-11-21-tonbrother_promo.json')
const plan31 = lerArquivoJSON(
  './old_plans/2023-11-21-tonbrother_tier_base.json'
)
const plan32 = lerArquivoJSON(
  './old_plans/2023-11-21-tonbrother_tier_promo.json'
)
const plan33 = lerArquivoJSON(
  './old_plans/2023-11-21-tonbrother_tier_regular.json'
)
const plan34 = lerArquivoJSON('./old_plans/2023-11-21-tonbrother.json')
const plan35 = lerArquivoJSON('./old_plans/2023-11-21-ultraton.json')

// Suponha que você tenha uma lista de 15 objetos
const objetosGrandes = [
  plan1,
  plan2,
  plan3,
  plan4,
  plan5,
  plan6,
  plan7,
  plan8,
  plan9,
  plan10,
  plan11,
  plan12,
  plan13,
  plan14,
  plan15,
  plan16,
  plan17,
  plan18,
  plan19,
  plan20,
  plan21,
  plan22,
  plan23,
  plan24,
  plan25,
  plan26,
  plan27,
  plan28,
  plan29,
  plan30,
  plan31,
  plan32,
  plan33,
  plan34,
  plan35,
]

// Função para encontrar propriedades comuns entre objetos
const encontrarPropriedadesComuns = (objetos) => {
  // Use a primeira entrada como referência para comparação
  const referencia = objetos[0]

  // Crie uma lista de todas as chaves da referência
  const chavesReferencia = Object.keys(referencia)

  // Use R.intersection para encontrar as chaves comuns em todos os objetos
  const chavesComuns = R.intersection(
    chavesReferencia,
    R.flatten(objetos.map(Object.keys))
  )

  // Use R.filter para encontrar os objetos que têm as mesmas propriedades comuns
  const objetosComuns = R.filter(
    (objeto) =>
      R.equals(
        R.pickAll(chavesComuns, referencia),
        R.pickAll(chavesComuns, objeto)
      ),
    objetos
  )

  return objetosComuns
}

// Encontrar objetos com propriedades comuns
const objetosComuns = encontrarPropriedadesComuns(objetosGrandes)

console.log(objetosComuns)
