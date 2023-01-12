/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dropdown } from "@components/Dropdown";
import { addLocation } from "@store/actions/LocationActions";
import { ILocation } from "@types/OpenWeather.location";
import axios from 'axios';
import { useDebounce } from 'hooks/useDebounce';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from "react-redux";

import {Container,Input,Label} from './styles'

export const Form = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<Array<ILocation>>([])
  const [dropdown, setDropdown] = useState<boolean>(true);
  const debounced = useDebounce(search);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setDropdown((debounced.length > 2) && (data?.length! > 0));
    axios.get(`${process.env.OPEN_WEATHER_CITY_PATH}?q=${debounced}&limit=10&appid=${process.env.OPEN_WEATHER_API_key}`)
    .then(responce => setData(responce.data))
  }, [debounced]);
  
  return (
    <Container>
        <Label>Введите город:</Label>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for city..."
          value={search}/>
          <Dropdown cities={data} dropdown={dropdown} setDropdown={setDropdown}/>
    </Container>
  )
}
