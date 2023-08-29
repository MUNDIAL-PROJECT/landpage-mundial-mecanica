export interface CardType {
  id: number,
  name: string,
  imgPath: string,
  description: string,
  category: string,
}

export const PRODUCT_MOCK: CardType[] = [
  {
    id: 1,
    name: "Pastilhas de Freio",
    category: "Sistema de Freio",
    imgPath: "./productCards/pastilhas_de_freio.jpg",
    description: "Pastilhas de freio de alta qualidade para garantir uma frenagem segura e eficiente.",
  },
  {
    id: 2,
    name: "Filtro de Ar",
    category: "Sistema de Filtragem",
    imgPath: "./productCards/filtro_de_ar.jpg",
    description: "Filtro de ar que mantém o ar do motor limpo, melhorando o desempenho e a eficiência.",
  },
  {
    id: 3,
    name: "Amortecedor",
    category: "Suspensão",
    imgPath: "./productCards/amortecedor.jpg",
    description: "Amortecedor de alta resistência para garantir uma condução suave e estável.",
  },
  {
    id: 4,
    name: "Correia Dentada",
    category: "Motor",
    imgPath: "./productCards/correia_dentada.jpg",
    description: "Correia dentada resistente para garantir o sincronismo correto do motor.",
  },
  {
    id: 5,
    name: "Vela de Ignição",
    category: "Ignição",
    imgPath: "./productCards/vela_de_ignicao.jpg",
    description: "Vela de ignição de alta performance para garantir a combustão eficiente.",
  },
  {
    id: 6,
    name: "Radiador",
    category: "Sistema de Arrefecimento",
    imgPath: "./productCards/radiador.jpg",
    description: "Radiador que mantém a temperatura do motor controlada, evitando superaquecimentos.",
  },
  {
    id: 7,
    name: "Sensor de Oxigênio",
    category: "Sistema de Emissões",
    imgPath: "./productCards/sensor_de_oxigenio.jpg",
    description: "Sensor de oxigênio que monitora os gases do escapamento para otimizar a eficiência do motor.",
  },
  {
    id: 8,
    name: "Rolamento de Roda",
    category: "Rodas e Pneus",
    imgPath: "./productCards/rolamento_de_roda.jpg",
    description: "Rolamento de roda durável para garantir um movimento suave das rodas.",
  },
  {
    id: 9,
    name: "Bateria",
    category: "Sistema Elétrico",
    imgPath: "./productCards/bateria.jpg",
    description: "Bateria de alta capacidade para fornecer energia confiável ao sistema elétrico.",
  },
  {
    id: 10,
    name: "Junta do Motor",
    category: "Motor",
    imgPath: "./productCards/junta_do_motor.jpg",
    description: "Junta do motor que previne vazamentos de fluidos e mantém a integridade do motor.",
  },
];