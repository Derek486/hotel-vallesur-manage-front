import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ProfileIcon, LogoutIcon } from './Icons';
import useLogout from '../hooks/useLogout';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logout] = useLogout()
  const [usuario, setUsuario] = useState({})
  const navigate = useNavigate()

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    // getUser()
    //   .then(({ data }) => {
    //     setUsuario(data)
    //   })
  }, [])

  const handleLogout = () => {
    // logout()
    //   .then(res => {
    //     if (res.status === 204) {
    //       navigate('/auth/login')
    //     } 
    //   })
  }

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-lg font-medium text-black">
            {/* { usuario.nombres } */}
            Juan Jose
          </span>
        </span>

        <svg
          className={`hidden fill-current transition-transform sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-48 py-4 px-6 gap-4 flex-col rounded-sm border border-stroke bg-white shadow-default ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <Link
            to="/dashboard/perfil"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
            <ProfileIcon height={22} width={22} />
            Mi Perfil
        </Link>
        <button 
          onClick={logout}        
          className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <LogoutIcon width={22} height={22} />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
