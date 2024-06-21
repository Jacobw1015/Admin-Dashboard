import './Sales.css';
import Card from '../Card/Card';
import sales from "../../Data/sales";
import useActive from '../../hooks/useActive';
import { useRef } from 'react';

export default function Sales(){
 const salesRef = useRef<HTMLParagraphElement>(null);
 const {active, handleClick} = useActive(salesRef);
    return(
        <Card header='Sales'>
               {
               sales.map((sale)=><p 
               id={`${sale.id}`} 
               onClick={handleClick} 
               className={active === (sale.id).toString() ? "active":""} 
               key={sale.id}>{`$${sale.amount}`}</p>)
               }
         </Card>
    )
};
