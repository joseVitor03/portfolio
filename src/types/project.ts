type Tecnologies = {
  id: number,
  logo: string
};

type ProjectType = {
  id: number,
  typeProject: string,
  name: string,
  image: string,
  description: string,
  tecnologiesFront: Tecnologies[],
  tecnologiesBack: Tecnologies[],
  linkRepoFront: string,
  linkRepoBack: string,
  video: string
};

export default ProjectType;
