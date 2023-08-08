export interface DataType {
  title: string,
  bgImg: string,
  description: string
}

export const DATA_MOCK: DataType[] = [
  {
    title: 'Manutenção Preventiva',
    bgImg: './serviceImages/service1.jpg',
    description: 'Serviços periódicos para garantir o bom funcionamento do veículo, como troca de óleo, filtros, velas, correias, inspeção de fluidos, verificação de sistema de arrefecimento, entre outros.'
  },
  {
    title: 'Reparos Mecânicos',
    bgImg: './serviceImages/service2.jpg',
    description: 'Serviços de reparo em componentes mecânicos, como motor, transmissão, suspensão, freios, direção, embreagem, escapamento, entre outros.'
  },
  {
    title: 'Diagnóstico Eletrônico',
    bgImg: './serviceImages/service3.jpg',
    description: 'Utilização de equipamentos e softwares de diagnóstico para identificar e solucionar problemas relacionados aos sistemas eletrônicos do veículo, como injeção eletrônica, ABS, airbags, controle de estabilidade, entre outros.'
  },
  {
    title: 'Serviços de Freios',
    bgImg: './serviceImages/service4.jpg',
    description: 'Substituição de pastilhas, discos, tambores, fluido de freio e verificação do sistema de freios para garantir a segurança do veículo.'
  },
  {
    title: 'Serviços de Suspensão',
    bgImg: './serviceImages/service5.jpg',
    description: 'Verificação e reparo de amortecedores, molas, bandejas, terminais de direção e outros componentes da suspensão para garantir o conforto e estabilidade do veículo.'
  },
  {
    title: 'Serviços Elétricos',
    bgImg: './serviceImages/service6.jpg',
    description: 'Reparos e substituição de componentes elétricos, como baterias, alternadores, motores de partida, iluminação, sistemas de ignição, entre outros. (Terceirizado)'
  },
  {
    title: 'Serviços de Ar Condicionado',
    bgImg: './serviceImages/service7.jpg',
    description: 'Manutenção, reparo e recarga do sistema de ar condicionado do veículo. (Terceirizado)'
  },
  {
    title: 'Alinhamento e Balanceamento',
    bgImg: './serviceImages/service8.jpg',
    description: 'Ajustes de alinhamento das rodas e balanceamento dos pneus para garantir estabilidade e durabilidade dos pneus. (Terceirizado)'
  },
];
