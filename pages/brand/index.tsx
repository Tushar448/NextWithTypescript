import React from 'react';
import { NextPage } from 'next';
import axios from "axios";

import { Brand } from '../../src/routes/Brand';
import {UnauthrizedUser} from '../unauthrizedUser';

const HomePage: NextPage = ({data}: any) => {
  if(data) {
    return <Brand data={data}/>
  } else {
    return<UnauthrizedUser/>
  }
}

HomePage.getInitialProps = async () => {
    const {data} = await axios.get('https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/home/categories')
    return { data }
  }


export default HomePage;