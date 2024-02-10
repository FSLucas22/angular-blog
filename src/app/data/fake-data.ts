export interface Post {
  id: string,
  photo: string,
  photoAlt: string,
  title: string,
  description: string
}

const fakeData: Post[] = [
  {
    "id": "1",
    "photo": "https://via.placeholder.com/900x400",
    "photoAlt": "Imagem da notícia principal",
    "title": "Título da notícia principal",
    "description": "Descrição da notícia principal"
  },
  {
    "id": "2",
    "photo": "https://via.placeholder.com/900x400",
    "photoAlt": "Imagem da notícia secundária 1",
    "title": "Título da notícia secundária 1",
    "description": "Descrição da notícia secundária 1"
  },
  {
    "id": "3",
    "photo": "https://via.placeholder.com/900x400",
    "photoAlt": "Imagem da notícia secundária 2",
    "title": "Título da notícia secundária 2",
    "description": "Descrição da notícia secundária 2"
  },
  {
    "id": "4",
    "photo": "https://via.placeholder.com/900x400",
    "photoAlt": "Imagem da notícia secundária 3",
    "title": "Título da notícia secundária 3",
    "description": "Descrição da notícia secundária 3"
  },
];

export function getById(id: string): Post {
  const result: Post[] = fakeData.filter((post) => post.id === id);
  if (result.length === 0) {
    throw Error("Not found!");
  }
  return result[0];
}
