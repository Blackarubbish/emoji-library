import React from 'react'
import style from './index.module.scss'

import { NavLink } from 'react-router-dom'

// 菜单
const MENU = [
    { name: '🥵全部', to: '/' },
    { name: '😂笑脸和表情', to: '/smile' },
    { name: '👌人类和身体', to: '/person' },
    // { name: '肤色和发型', to: '/skin' },
    { name: '🐵动物和自然', to: '/animal' },
    { name: '🍓食物和饮料', to: '/food' },
    { name: '🚌旅行和地点', to: '/travel' },
    { name: '⚽活动', to: '/activity' },
    { name: '⌚物品', to: '/goods' },
    { name: '🛑符号', to: '/symbol' },
    { name: '🏁旗帜', to: '/flag' },
]



export default function index() {
    return (
        <div className={style.Aside}>
            <header className={style["site-name"]}>😀Emoji-Library</header>
            <nav>
                <h2> -分类</h2>
                <ul className={style.classify}>
                    {
                        MENU.map(item => {
                            return (
                                <li
                                    key={item.name}>
                                    <NavLink
                                        className={({ isActive }) => {
                                            return isActive ? style['active']: style["nav-link"];
                                        }}
                                        to={item.to}>{item.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
