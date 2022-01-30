export type TopicsModel = {
  id?: number;
  title: string;
  section: string;
  contact: string;
  description: string;
  author: string;
  authorId: number | null
  createAt?: string;
  updatedAt?: string;
  status?: boolean;
}