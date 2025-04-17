import axios from "axios";
// import { WPPostType } from "../types/WPPostType";

const apiUrl = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: apiUrl,
});

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPost = async (slug: string) => {
  const response = await api.get(`/posts`, {
    params: {
      slug: slug,
    },
  });

  if (response.data.length === 0) {
    throw new Error("Post not found");
  }

  return response.data[0];
};

export const getLatestPost = async () => {
  const response = await api.get("/posts", {
    params: {
      per_page: 1,
      order: "desc",
      orderby: "date",
    },
  });
  return response.data[0];
};

export const getProject = async (slug: string) => {
  const response = await api.get("/projects?_embed", {
    params: {
      slug: slug,
    },
  });

  if (response.data.length === 0) {
    throw new Error("Project not found");
  }

  return response.data[0];
};

export const getProjects = async (count = 99) => {
  const response = await api.get("/projects", {
    params: {
      per_page: count,
      order: "desc",
      orderby: "date",
      _embed: true,
    },
  });

  return response.data;

  // return response.data.map((project) => ({
  //   id: project.id,
  //   title: project.title.rendered,
  //   path: `/projects/${project.slug}`,
  //   image: {
  //     source: project._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  //   },
  // }));
};
