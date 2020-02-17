import { get, post, put, destroy } from 'src/shared/services/api/base';

export const Users = {
  index: () => get('/users'),
  single: (id: number) => get(`/users/${id}`),
  singleByEmail: (email: string) => get(`/users?email=${email}`),
  create: (params: object) => post('/users', params),
  update: (id: number, params: object) => put(`/users/${id}`, params),
  remove: (id: number) => destroy(`/users/${id}`),
};
