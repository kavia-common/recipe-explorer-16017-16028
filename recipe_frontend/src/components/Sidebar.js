import React from 'react';

// PUBLIC_INTERFACE
function Sidebar({ categories, selectedCategory, onCategorySelect }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="category-list">
        {categories.map(category => (
          <li
            key={category}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
