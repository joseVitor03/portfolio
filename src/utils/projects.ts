import serviceManagement from './images/page-services.png';
import wallet from './images/wallet.png';
import videoService from './videos/Gravação de tela de 18-09-2024 16:25:43.webm';
import videoWallet from './videos/Gravação de tela de 19-09-2024 17:38:45.webm';
import appMovie from './images/screen-movies.png';
import videoAppMovies from './videos/Gravação de tela de 16-12-2024 16:48:31.webm';

const node = 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white';
const typescript = 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white';
export const projects = [{
  id: 1,
  typeProject: 'FullStack',
  name: 'Service Management',
  image: serviceManagement,
  description: `Uma aplicação completa para o gerenciamento de 
  serviços em oficinas mecânicas. Oferece funcionalidades como
   registro de clientes e veículos. Além disso, o sistema oferece 
   relatórios gerenciais para monitorar a produtividade dos 
   funcionários, proporcionando uma gestão mais eficiente e centralizada.`,
  tecnologiesFront: [{
    id: 1, logo: typescript },
  { id: 3, logo: 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' },
  { id: 4, logo: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
  { id: 5, logo: 'https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e' },
  { id: 11, logo: 'https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white' },
  ],
  tecnologiesBack: [
    { id: 1, logo: typescript },
    { id: 2, logo: node },
    { id: 6, logo: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
    { id: 7, logo: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white' },
    { id: 8, logo: 'https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white' },
    { id: 9, logo: 'https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens' },
    { id: 10, logo: 'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white' },
    { id: 11, logo: 'https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white' },
  ],
  linkRepoFront: 'https://github.com/joseVitor03/Service-Management-Front-End',
  linkRepoBack: 'https://github.com/joseVitor03/Service-Management-API',
  video: videoService,
}, {
  id: 2,
  typeProject: 'Front-End',
  name: 'Wallet',
  image: wallet,
  description: ` uma carteira de controle de gastos com conversor de moedas. 
  Ao utilizar essa aplicação, a pessoa usuária deverá ser capaz de:
Adicionar, remover e editar um gasto.
Visualizar sua tabela de gastos.
Visualizar o total de gastos convertidos para uma moeda de sua escolha.`,
  tecnologiesFront: [{
    id: 1,
    logo: typescript },
  { id: 3, logo: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
  { id: 12, logo: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' },
  { id: 13, logo: 'https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white' },
  ],
  tecnologiesBack: [],
  linkRepoFront: 'https://github.com/joseVitor03/project-wallet',
  linkRepoBack: '',
  video: videoWallet,
}, {
  id: 3,
  typeProject: 'Mobile',
  name: 'App Movies',
  image: appMovie,
  description: `O APP Movies tem como objetivo listar
  os Filmes e Séries e algumas funcionalidades.`,
  tecnologiesFront: [{
    id: 1,
    logo: typescript },
  { id: 3, logo: 'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
  { id: 12, logo: 'https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37' },
  ],
  tecnologiesBack: [],
  linkRepoFront: 'https://github.com/joseVitor03/app-movies',
  linkRepoBack: '',
  video: videoAppMovies,
}];
