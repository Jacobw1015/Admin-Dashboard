import { useRef } from 'react';
import assets from './assets';
import capitalize from './Util/capitalize';
import Users from './components/Users/Users';
import useActive from './hooks/useActive';
import Sales from './components/Sales/Sales';

const user="Jacob Wenger";

function App() {
const sidebarRef = useRef<HTMLDivElement>(null);  
const { active , handleClick } = useActive(sidebarRef);
  return (  
    <div className='container'  >
        {/* Sidebar section */}
        <div className="sidebar" >
          <h2 className="sidebar-header">Hello, {user}!</h2>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            {
               Object.keys(assets).map((key)=>{
                  return( key !=="close" &&
                     <div 
                     
                     className={`icon ${active === key? "active": ""}`} 
                     id={key} onClick={handleClick} key={key}>
                        <img src={assets[key as keyof typeof assets]} alt={key} />
                        <span className="caption">{capitalize(key)}</span>
                     </div>
                  )
               })
            }
             
          </div>
         
        </div>
        
        {/* Main Content */}
        <main className='content'>
         <Users />
         <Sales />

        </main>
      
        </div>
  )
}

export default App
