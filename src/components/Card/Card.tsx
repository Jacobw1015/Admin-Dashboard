import { ReactNode } from 'react'
import './Card.css'
import capitalize from '../../Util/capitalize';

interface CardProps extends React.HTMLAttributes<HTMLElement>{
    header?:string;
    children:ReactNode;
}
export default function Card({header,children, className, ...props}:CardProps){

    return(
        <div className={`card ${className}`} {...props}>
            {header&&<h2 className='card-header'>{capitalize(header)}</h2>}
            <section className='card-body'>
                {children}
            </section>
        </div>
    )

};
