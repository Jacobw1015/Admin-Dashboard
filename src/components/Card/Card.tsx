import { ReactNode } from 'react'
import './Card.css'

interface CardProps extends React.AllHTMLAttributes<HTMLDivElement>{
    header?:string;
    children:ReactNode;
}
export default function Card({header,children, ...props}:CardProps){

    return(
        <div className="card" {...props}>
            {header&&<h2 className='card-header'>{header}</h2>}
            <section className='card-body'>
                {children}
            </section>
        </div>
    )

};
