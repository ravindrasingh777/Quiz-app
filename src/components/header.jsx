import { useContext } from 'react';
import React from 'react';
import { maincontext } from './context';
import { Link } from 'react-router-dom';


const Header = () => {
const {user}=useContext(maincontext)

const {logout}=useContext(maincontext)


    return (
        <>
            <div className='shadow text-3xl p-3  flex justify-between '>
                <div>MyLogo</div>
                <div>
                    <ul className='flex gap-[40px]'>
                        <li><Link to={"/"}>Home</Link></li> 
                        {
                            user==null
                            ?<li><Link to={"/login"}>Login</Link></li>
                            :
                            <>
                              <li><Link to={"/play"}>Play</Link></li>
                              <li><Link to={"/addquiz"}>Add Quiz</Link></li>
                              <li><Link to={"/viewquiz"}>View Quiz</Link></li>
                              <li onClick={logout} ><Link to={"/login"}>Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
