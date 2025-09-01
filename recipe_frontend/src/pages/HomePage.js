import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RecipeList from '../components/RecipeList';
import { getRecipes, getCategories } from '../api/recipes';

// PUBLIC_INTERFACE
function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };
    fetchCategories();
  }, []);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes(searchTerm, selectedCategory);
      setRecipes(data);
    };
    fetchRecipes();
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app-layout">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="main-content">
        <Sidebar categories={categories} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
        <main className="recipe-grid">
          <RecipeList recipes={recipes} />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
