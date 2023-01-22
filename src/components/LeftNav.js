import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import LeftNavMenuItem from './LeftNavMenuItem';
import { Context } from '../context/contextAPI';
import { categories } from '../utils/constants';

const LeftNav = () => {

  const { selectedCategory, setSelectCategories, mobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectCategories(name)
      case 'home':
        return setSelectCategories(name)
      case 'menu':
        return false
      default:
        break;
    }
  }

  return (
    <div className='md:block h-full py-1 bg-black absolute md:relative z-10  w-[240px] translate-x-[-240] md:translate-x-0 transition-all overflow-y-auto'>
      <div className='flex flex-col px-4'>
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === 'home' ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate('/')
                }}
                className={`${selectedCategory === item.name ? 'bg-white/[0.15]' : ''}`}
              // className={'bg-white/[0.15]'}

              />
              {item.divider && (<hr className='my-5 border-white/[0.2]' />)}
            </React.Fragment>
          )
        })}

        <hr className='my-5 border-white/[0.2]' />
        <div className='text-white/[0.6] text-[13px] items-center ml-3'>

          <u><a href='https://github.com/rajpreet88' target="_blank" rel="noopener noreferrer">Cloned by: <b>RajPreet</b></a></u>
        </div>
      </div>
    </div>
  )
}

export default LeftNav