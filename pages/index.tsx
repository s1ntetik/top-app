import React from 'react';
import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <div >
      <Htag tag='h1'>Текст</Htag>
      <Button appearence='primary' arrow='right'>кнопка</Button>
      <Button appearence='ghost' arrow='right'>кнопка</Button>
    </div>
  )
}
