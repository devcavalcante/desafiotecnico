import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import Pagination from "../Pagination/index";

export default function Repositorio() {
  const [Repositorios, setRepositorios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repositorioPerPage] = useState(4);
  const indexOfLastPost = currentPage * repositorioPerPage;
  const indexOfFirstPost = indexOfLastPost - repositorioPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentRepositorios = Repositorios.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const username = useParams().username;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get(`${username}/repos`);
      setRepositorios(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2> Repositórios </h2>
      {currentRepositorios.map((repositorio, index) => (
        <div className="card card-1">
          <a href={`http://github.com/$index{repositorio.full_name}`}>
            <h3 key={index}>{repositorio.name}</h3>
          </a>
          <h5>{repositorio.language}</h5>
        </div>
      ))}
      <Pagination
        className="pagination"
        repositorioPerPage={repositorioPerPage}
        totalPosts={Repositorios.length}
        paginate={paginate}
      />
    </div>
  );
}
