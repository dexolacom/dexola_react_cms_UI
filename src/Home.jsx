import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/cards/${id}`);
  };

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/platforms')
      .then((response) => setItems(response?.data.data));
  }, []);

  return (
    <>
      <ul className="homeUL">
        {items.map((el) => (
          <li
            key={el.id}
            className="homeContainer"
            onClick={() => handleCardClick(el.id)}
          >
            <h2>{el.attributes.data.title}</h2>

            <div className="homeCategories">
              {el.attributes.data.categories.map((item, idx) => (
                <div key={idx} className="item">
                  {item}
                </div>
              ))}
            </div>
            <p>{el.attributes.data.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
