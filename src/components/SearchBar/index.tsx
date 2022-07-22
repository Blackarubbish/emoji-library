import React from 'react'
import  './index.scss'
export default function SearchBar() {
  return (
    <div className='search-bar'>
        <input placeholder='英文关键词' type="text" />
        <span>🔍</span>
    </div>
  )
}
