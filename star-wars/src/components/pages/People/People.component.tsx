import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../../../services/peopleService';
import {IPeople} from "../../../types/types";

interface PeopleProps {}

const People: React.FC<PeopleProps> = ({}) => {
  const [people, setPeople] = useState<IPeople>();
  useEffect(() => {
    fetchPeople().then((data) => setPeople(data));
  }, []);
  console.log('people: ', people);

  return <div>People</div>;
};

export default People;
