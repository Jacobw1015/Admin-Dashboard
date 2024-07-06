import { useRef } from 'react';
import assets from './assets';
import capitalize from './Util/capitalize';
import Card from './components/Card/Card';
import users from './Data/users';
import sales from './Data/sales';
import requests from './Data/requests';


function App() {
  return (  
   <div className='container'  >
      {/* Header */}
      <header className='header'>
      <h1 className="company-name">Welcome to Cool-Recipes!</h1>

      {/* Navbar */}
      <nav>
         <ul className='links'>
            <li className="link">Link</li>
            <li className="link">Link</li>
            <li className="link">Link</li>
         </ul>
      </nav>
      </header>
      {/* Sidebar */}
         <aside className="sidebar">
            {
               assets.map(asset=>( <div className="icon" key={asset.id}>
                  <img src={asset.src} alt={asset.alt} />
                  <span className="caption">{capitalize(asset.alt)}</span>
               </div> ))
            }
         </aside>

      {/* Content */}
         <main className="content">
            <Card header='Users' className='users'>
            <section className='users'>
               {users.map(user=>(
                  <div className='user' key={user.id}>
                    <p className="name" >{`${capitalize(user.firstname)} ${capitalize(user.lastname)}`}</p>
                    <p className="email">{user.email}</p>
                  </div>   
               ))}
            </section>
            </Card>
            <Card header='Sales' className='sales'>
            <section className="sales">
               {
                  sales.map(sale=>(
                     <div className="sale" key={sale.id}>
                        <p className="sale-amount">{`$${sale.amount.toLocaleString("en-us")}`}</p>
                     </div>
                  ))
               }
            </section>
            </Card>
            <Card header='Requests' className='requests'>
               <section className="requests">
                  {
                     requests.map(request=>(
                        <Card>
                        <div className="request" key={request.id}>
                           <h4 className="title">{capitalize(request.title)}</h4>
                           <p className="body">{request.body}</p>
                        </div>
                        </Card>
                     ))
                  }
               </section>
            </Card>
         </main>
      {/* Footer */}
      <footer className="footer">
         <div className="copyright">
            <h3 className="copyright">
               Cool-Recipes&copy;
            </h3>
         </div>
            <div className="contact">
               <h3 className="company-email">Email: email@CoolRecipes.com</h3>
               <h3 className="company-number">Phone: 111-111-1111</h3>
            </div>
      </footer>
   </div>
  )
}

export default App
