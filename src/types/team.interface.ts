export interface ITeam {
  name: { title: string; first: string; last: string };
  phone: string;
  email: string;
  registered: { date: string; age: number };
  picture: { large: string; medium: string; thumbnail: string };
}
