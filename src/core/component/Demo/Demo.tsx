import React, { useState } from 'react'


type CardProps = {
    title: string;
    content: string;
}

export default function Demo({ title, content }: CardProps) {


    const [value, setValue] = useState<number>(0);   
    


  return (
      <div  className='demo'>
          <h1>More than just shorter links</h1>
          <h2>Advanced Statistics</h2>
          <h4>Title H4</h4>
      <p className="text-md-lg"> [ TEXT-medium-large ]Commodo non nostrud veniam aliquip est sint sit labore. Non quis sit elit id eiusmod nisi laboris in veniam proident aliqua incididunt ipsum minim. Anim culpa minim do sunt eiusmod ea aliqua anim in exercitation. Eiusmod mollit enim ea aliquip. Reprehenderit pariatur velit deserunt nostrud minim nostrud.</p>


      <p className='text-sd-lg'> [ TEXT-standart-large ]Laboris aliqua fugiat consectetur velit incididunt aute nostrud laborum.</p>

      <p className='text-sd'> [ TEXT-standart ]Esse anim nostrud magna excepteur in. Fugiat adipisicing quis consectetur anim laboris duis Lorem qui sit dolor consequat nostrud veniam. Exercitation sit minim occaecat labore deserunt id officia ipsum laborum. Eu eiusmod veniam minim tempor ullamco aliqua id irure est sunt. Esse sint incididunt irure sit ipsum. Officia exercitation reprehenderit et consequat ipsum. Dolore nulla eu veniam amet voluptate aute reprehenderit consectetur qui ut nostrud non do reprehenderit.</p>

      
      <button className='btn_rounded-big'>Get Started</button>

      <button className='btn--big'>Submit</button>
      <button className='btn--xs'>Copy</button>
      <button className='btn--xs' data-active="true">Copied</button>

      <div style={{backgroundColor : "#3a3054", padding : "2rem 6rem"}}>
      <input type="text"  placeholder='Shorten a link here...'/>
        
      </div>


      <nav>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Ressources</a>
         </nav>
    </div>
  )
}
