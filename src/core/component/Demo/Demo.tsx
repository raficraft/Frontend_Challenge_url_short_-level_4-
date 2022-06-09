import React, { useState } from 'react'


type CardProps = {
    title: string;
    content: string;
}

export default function Demo({ title, content }: CardProps) {


    const [value, setValue] = useState<number>(0);   
    


  return (
      <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <p>count : 0 </p>
    </div>
  )
}
