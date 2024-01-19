import logo from '@/assets/icon.svg'; // adjust the path and file name as needed
import { useEffect, useState } from 'react';

export type TopNavbarProps = {
  items: {
    label: string | JSX.Element
  }[]
}


const Header = ({
  items,
}: TopNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarClasses = ['box-border', 'w-full', 'h-[72px]', 'shadow-default', 'fixed', 'top-0', 'left-0', 'z-20'];
  if (scrolled) {
    navbarClasses.push('bg-white');
  }
  return (
    <>
      <div
        className={navbarClasses.join(" ")}      >
        <div className='max-w-[1320px] w-full h-full mx-auto px-6 sm:px-8 flex items-center justify-between'>
          <section className='flex gap-2 items-center'>
            <img className="w-16 h-16 relative rounded-xl " src={logo} alt='logo' />
            <h1 className='font-bold text-h1 slide-out-to-left-px text-primary '>Jaune</h1>
          </section>

          <section className='flex items-center gap-6'>
            {!!items.length && (
              <ul
                className='hidden md:inline-flex gap-8'
              >
                {items.map((item, i) => (
                  <div>
                    <li
                      key={`navbar-item-${i}`}
                    >
                      <a key={i} href="#" className="text-body-m hover:text-primary text-primary-content font-bold">{item.label}</a>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </>)

}

export default Header