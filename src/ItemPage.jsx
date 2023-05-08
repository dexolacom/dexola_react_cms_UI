import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

const ItemPage = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  console.log('items ItemPage', items);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:1337/api/datails/${id}`)
        .then((response) => setItems([response?.data.data]));
    }
  }, [id]);

  const MappingArray = (title, array) => {
    return (
      <div className="div">
        <p className="headTitle">{title}</p>
        <ul className="listUl">
          {array?.map((item, idx) => (
            <li key={idx} className="listUl">
              <span className="listItem">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const CreateComponent = (heading, title) => {
    return (
      <div>
        <h3>{heading}</h3>
        <p className="title">{title}</p>
      </div>
    );
  };

  return (
    <div className="container">
      <ul className="containerList">
        {items?.map((item) => (
          <div key={item.id}>
            <p>Services</p>
            <ul className="list">
              {item?.attributes?.data?.categories?.map((el, idx) => (
                <li key={idx}>
                  <span className="item">{el}</span>
                </li>
              ))}
            </ul>

            <div>
              {CreateComponent('Summary', item.attributes.data.summary)}
            </div>

            <>
              {item?.attributes.rich && (
                <img
                  src={item.attributes.rich}
                  alt="Logo"
                  width="834"
                  height="524"
                />
              )}
            </>

            <>
              <p>Technology Stack</p>

              <div>
                {item?.attributes.data.technology_stack.network &&
                  MappingArray(
                    'Network',
                    item?.attributes.data?.technology_stack?.network,
                  )}
              </div>

              <div>
                {item?.attributes.data.technology_stack.backend &&
                  MappingArray(
                    'Backend',
                    item.attributes.data.technology_stack.backend,
                  )}
              </div>

              <div>
                {item?.attributes.data.technology_stack.database &&
                  MappingArray(
                    'Database',
                    item.attributes.data.technology_stack.database,
                  )}
              </div>

              <div>
                {item?.attributes.data.technology_stack.blockchain &&
                  MappingArray(
                    'Blockchain',
                    item.attributes.data.technology_stack.blockchain,
                  )}
              </div>

              <div>
                {item?.attributes.data.technology_stack.frontend &&
                  MappingArray(
                    'Frontend',
                    item.attributes.data.technology_stack.frontend,
                  )}
              </div>

              <div>
                {item?.attributes.data.technology_stack.infrastructure &&
                  MappingArray(
                    'Infrastructure',
                    item.attributes.data.technology_stack.infrastructure,
                  )}
              </div>
            </>

            <div>
              {CreateComponent('Situation', item.attributes.data.situation)}
            </div>
            <div>{CreateComponent('Task', item.attributes.data.task)}</div>

            <div>
              {CreateComponent('Action', item.attributes.data.action)}
              <ul>
                {item.attributes.data.actionList.map((tech, idx) => (
                  <li className="auctionList" key={idx}>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {CreateComponent('Result', item.attributes.data.result)}
              {item.attributes.data.link && (
                <div className="divLink">
                  <a href={item.attributes.data.link} className="link">
                    {item.attributes.data.link}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemPage;
