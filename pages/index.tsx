import React, { useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
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
      <Rating rating={4}></Rating>
      <Rating isEditable rating={rating} setRating={setRating}></Rating>
    </>
  )
}

export default withLayout(Home)