export interface IGame {
  id: string;
  gameName: string;
  description: string;
  developerGithubId: string;
  url: string;
  keyPointsOfInterest: string;
  techIds: string[];
  createdDate: string;
  paypalUsername?: string;
  patreonUsername?: string;
  rating?: number;
}
