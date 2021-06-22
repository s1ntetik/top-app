import React from 'react';
import { Htag, Button, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div >
      <Htag tag='h1'>Text</Htag>
      <Button appearence='primary' arrow='right'>кнопка</Button>
      <Button appearence='ghost' arrow='down'>кнопка</Button>
      <Ptag size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, rerum.</Ptag>
      <Ptag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, rerum.</Ptag>
      <Ptag size='l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, rerum.</Ptag>

      <Tag size='s'>ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='m' color='green'>Green</Tag>
      <Tag size='m' color='primary'>Green</Tag>
    </div>
  )
}
