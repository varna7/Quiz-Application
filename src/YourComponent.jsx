import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

import axios from "axios";

const YourComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(7);

  useEffect(() => {
    axios
      .get("http://localhost:8765/question-service/question/allQuestions")
      .then((response) => {
        setQuestions(response.data);
        console.log("q", questions.length);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const lastIndex = Math.ceil(questions.length / questionsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="questions  table-responsive">
      <div className="search">
        <input type="text" name="category" id="category" placeholder="Search by category"/>
        <button type="submit">Search</button>
      </div>
      <Table bordered hover size="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Category</th>
            <th>Difficulty Level</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Right Answer</th>
            <th colSpan={2}>Actins</th>
          </tr>
        </thead>
        <tbody>
          {currentQuestions.map((q) => {
            return (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td className="ellipsis">{q.questionTitle}</td>
                <td>{q.category}</td>
                <td>{q.difficultylevel}</td>
                <td>{q.option1}</td>
                <td>{q.option2}</td>
                <td>{q.option3}</td>
                <td>{q.option4}</td>
                <td>{q.rightAnswer}</td>
                <td>
                  <button className="delete">
                    <DeleteIcon />
                  </button>
                </td>
                <td>
                  <button>
                    <EditIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={() => paginate(1)}>
            <FirstPageIcon fontSize="small" />
          </button>
        </li>
        {Array.from({ length: lastIndex }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={() => paginate(lastIndex)}>
            <LastPageIcon fontSize="small" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default YourComponent;
