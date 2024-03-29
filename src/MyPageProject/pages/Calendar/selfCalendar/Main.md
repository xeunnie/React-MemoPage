import React, { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import ControlDate from './ControlDate';
import DateBox from './DateBox';
import type { Holiday } from './type';

const Container = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const requestData = {
  url: `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?`,
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  solYear: 2022,
  solMonth: 12,
};

function Main() {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();
  const [holiday, setholiday] = useState<Holiday[]>([]);

  const getHoliday = async () => {
    const bodyData = {
      ...requestData,
      solYear: nowDate.getFullYear(),
      solMonth: nowDate.getMonth() + 1,
    };

    const response = await axios.get(`${bodyData.url}ServiceKey=${bodyData.serviceKey!}&solYear=${bodyData.solYear}&solMonth=${bodyData.solMonth}`);

    const saveData = [].concat(response.data.response.body.items.item);
    setholiday(saveData);
  };

  useEffect(() => {
    void getHoliday();
  }, [nowDate]);

  return (
    <Container>
      <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
      <DateBox nowDate={nowDate} setNowDate={setNowDate} clickedDate={clickedDate} setClickedDate={setClickedDate} holiday={holiday} />
    </Container>
  );
}

export default Main;
