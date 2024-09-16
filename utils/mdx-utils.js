import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts'); 

    if (data) {
        return data;
    }

    return [];
}

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts/${id}`); // Aqui, substitua pelo endpoint correto se for diferente
        return data;
    } catch (error) {
        console.error('Erro ao buscar o post:', error);
        return {};
    }
}
