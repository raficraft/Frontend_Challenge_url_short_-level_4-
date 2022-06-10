import React from 'react'
import Header from '../Header/Header';


type Props = {  
  children: React.ReactNode;
};

export default function Layout({children} : Props) {
  return (
    <>
      <section id="__Layout">

        <Header></Header>
        <section id="__Hero"><h1>Hero Banner</h1></section>
        <main id="__Main">
        {children}

        </main>
        <footer id="__Footer"><h1>Footer</h1></footer>
    </section>
    
    </>
  )
}
