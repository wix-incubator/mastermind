export interface IGame {
  id: string;
  description: string;
  developerGithubId: string;
  url: string;
  keyPointsOfInterest: string;
  techIds: string[];
  paypalUsername?: string;
  patreonUsername?: string;
}
