import { useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreProps {
  id: number;
  title: string;
}

export function App() {

  const [selectedGenre, setSelectedGenre] = useState<GenreProps>({} as GenreProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar setSelectedGenre={setSelectedGenre}/>
      
        <Content selectedGenre={{id:selectedGenre.id,title:selectedGenre.title}}/>
    </div>
  )
}