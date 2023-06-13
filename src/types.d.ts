interface Card1 {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
}

interface CrteatedAt {
  seconds: number;
  nanoseconds: number;
}

interface Card {
  id: string;
  title: string;
  image: string;
  description: string;
  url: string;
  public?: boolean;
  createdAt?: CreatedAt;
  userId?: string;
}
