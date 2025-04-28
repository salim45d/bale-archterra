export interface ITeam {
  name: { title: string; first: string; last: string };
  phone: string;
  email: string;
  registered: { date: string; age: number };
  picture: { large: string; medium: string; thumbail: string };
}

export const teams: ITeam[] = [
  {
    name: {
      title: "Mr",
      first: "Valentin",
      last: "Fuentes",
    },
    email: "valentin.fuentes@example.com",
    registered: { date: "927454906", age: 29 },
    phone: "988-484-835",
    picture: {
      large: "https://randomuser.me/api/portraits/men/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      thumbail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Anna",
      last: "Ferrer",
    },
    email: "anna.ferrer@example.com",
    registered: { date: "1187982255", age: 29 },
    phone: "945-543-511",
    picture: {
      large: "https://randomuser.me/api/portraits/women/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
      thumbail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Francisco",
      last: "Cabrera",
    },
    email: "francisco.cabrera@example.com",
    registered: { date: "1413716230", age: 29 },
    phone: "945-543-511",
    picture: {
      large: "https://randomuser.me/api/portraits/men/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
      thumbail: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Victor",
      last: "Prieto",
    },
    email: "victor.prieto@example.com",
    registered: { date: "1057810986", age: 29 },
    phone: "996-257-166",
    picture: {
      large: "https://randomuser.me/api/portraits/men/40.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
      thumbail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
    },
  },
];
