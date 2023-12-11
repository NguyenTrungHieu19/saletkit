 import styles from './index.module.scss'
import Logo from '../image/logo.png'
import { useEffect, useRef, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const data = [
    {
        value: 1,
        label: "ENG"
    },
    {
        value: 2,
        label: "VN"
    },
]
const Header = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [modleMneu, setModleMenu] = useState(false)
    const menuRef = useRef(null);    
    const handleChange = e => {
        setSelectedOption(e);
    }
    const handleClickMenu = ()=>{
            setModleMenu(!modleMneu);
    }
    const handleOutsideClick = (event) => {
     
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setModleMenu(false);
        }
    }
        useEffect(() => {
       
            document.addEventListener('mousedown', handleOutsideClick);
            return () => {
              
              document.removeEventListener('mousedown', handleOutsideClick);
            };
          }, []);
        
    const headerWapper = `${styles.header_wapper} ${styles.header_wapper_mobile}`
    return (
        <>
            <div className={headerWapper}>
                <div className={styles.header_img}>
                    <img src={Logo} />
                </div>
                <div className={styles.header_Menu}>
                    <ul className={styles.menu_content}>
                        <li>Bảng giá</li>
                        <li>Kho giao diện</li>
                        <li>Hướng dẫn</li>
                    </ul>
                    <ul className={styles.menu_tabs}>
                        <li>DashBoard</li>
                        <li>
                            <select className={styles.selectEnglish} onChange={handleChange} >
                                {data.map(item => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.header_container_mobile}>
                <div className={styles.header_img}>
                    <img src={Logo} />
                </div>
                <div className={styles.header_menu_icon}>
                    <FontAwesomeIcon onClick={handleClickMenu} icon={faBars}/>
                </div>
            </div>
            {
                modleMneu &&(
            <div ref={menuRef}  className={styles.header_wapper_menu_mobile}> 
                  <div className={styles.header_menu_mobile}>
                    <ul className={styles.menu_content_mobile}>
                        <li>Bảng giá</li>
                        <li>Kho giao diện</li>
                        <li>Hướng dẫn</li>
                    </ul>
                    <ul className={styles.menu_tabs_mobile}>
                        <li>DashBoard</li>
                        <li>
                            <select className={styles.selectEnglish_mobile} onChange={handleChange} >
                                {data.map(item => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </li>
                    </ul>               
                  </div>        
            </div>
                )
            }
        </>
    )
}
export default Header;