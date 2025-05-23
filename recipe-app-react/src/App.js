import React, { useState, useEffect, useMemo, useContext } from 'react'; // Add useContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import RecipePage from './components/RecipePage';
import recipesFullData from './recipes.js';
import { ThemeContext } from './context/ThemeContext'; // Import ThemeContext

const normalizeText = (text) => {
  if (typeof text !== 'string') return '';
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

function HomePage({
  searchTerm,
  selectedIngredients,
  selectedAppliances,
  selectedUstensils,
  filteredRecipes,
  availableIngredients,
  availableAppliances,
  availableUstensils,
  handleSearchChange,
  handleIngredientSelect,
  handleApplianceSelect,
  handleUstensilSelect,
  renderTags
}) {
  return (
    <main id="main">
      <SearchBar onSearchChange={handleSearchChange} />
      {renderTags()}
      <div className="div-filter">
        <FilterDropdown
          title="Ingrédients"
          items={availableIngredients}
          selectedItems={selectedIngredients}
          onSelect={handleIngredientSelect}
          colorClass="button-filter-blue"
        />
        <FilterDropdown
          title="Appareils"
          items={availableAppliances}
          selectedItems={selectedAppliances}
          onSelect={handleApplianceSelect}
          colorClass="button-filter-green"
        />
        <FilterDropdown
          title="Ustensiles"
          items={availableUstensils}
          selectedItems={selectedUstensils}
          onSelect={handleUstensilSelect}
          colorClass="button-filter-red"
        />
      </div>
      <RecipeList recipes={filteredRecipes} />
    </main>
  );
}

function App() {
  const { theme } = useContext(ThemeContext); // Get theme from context
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [selectedUstensils, setSelectedUstensils] = useState([]);

  useEffect(() => {
    document.body.className = theme + '-theme'; // e.g., 'light-theme' or 'dark-theme'
    return () => {
      document.body.className = ''; // Clean up on unmount
    };
  }, [theme]);

  const filteredRecipes = useMemo(() => {
    let recipes = recipesFullData;
    if (searchTerm.length >= 3) {
      const normalizedSearch = normalizeText(searchTerm);
      recipes = recipes.filter(recipe => {
        const normalizedName = normalizeText(recipe.name);
        const normalizedDescription = normalizeText(recipe.description);
        const ingredientsMatch = recipe.ingredients.some(ing => normalizeText(ing.ingredient).includes(normalizedSearch));
        return normalizedName.includes(normalizedSearch) || normalizedDescription.includes(normalizedSearch) || ingredientsMatch;
      });
    }
    if (selectedIngredients.length > 0) {
      recipes = recipes.filter(recipe =>
        selectedIngredients.every(selIng =>
          recipe.ingredients.some(ing => normalizeText(ing.ingredient) === normalizeText(selIng))
        )
      );
    }
    if (selectedAppliances.length > 0) {
      recipes = recipes.filter(recipe =>
        selectedAppliances.some(selApp => {
            if (Array.isArray(recipe.appliance)) {
                return recipe.appliance.some(app => normalizeText(app) === normalizeText(selApp));
            }
            return normalizeText(recipe.appliance) === normalizeText(selApp);
        })
      );
    }
    if (selectedUstensils.length > 0) {
      recipes = recipes.filter(recipe =>
        selectedUstensils.every(selUst =>
          recipe.ustensils.some(ust => normalizeText(ust) === normalizeText(selUst))
        )
      );
    }
    return recipes;
  }, [searchTerm, selectedIngredients, selectedAppliances, selectedUstensils]);

  const availableIngredients = useMemo(() => {
    const ingredients = new Set();
    filteredRecipes.forEach(recipe => { recipe.ingredients.forEach(ing => ingredients.add(ing.ingredient)); });
    return Array.from(ingredients).sort( (a,b) => normalizeText(a).localeCompare(normalizeText(b)));
  }, [filteredRecipes]);

  const availableAppliances = useMemo(() => {
    const appliances = new Set();
    filteredRecipes.forEach(recipe => { 
      if (recipe.appliance) {
        if (Array.isArray(recipe.appliance)) {
            recipe.appliance.forEach(app => appliances.add(app));
        } else {
            appliances.add(recipe.appliance);
        }
      }
    });
    return Array.from(appliances).sort( (a,b) => normalizeText(a).localeCompare(normalizeText(b)));
  }, [filteredRecipes]);

  const availableUstensils = useMemo(() => {
    const ustensils = new Set();
    filteredRecipes.forEach(recipe => { recipe.ustensils.forEach(ust => ustensils.add(ust)); });
    return Array.from(ustensils).sort( (a,b) => normalizeText(a).localeCompare(normalizeText(b)));
  }, [filteredRecipes]);

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredients(prev =>
      prev.map(i => normalizeText(i)).includes(normalizeText(ingredient))
        ? prev.filter(i => normalizeText(i) !== normalizeText(ingredient))
        : [...prev, ingredient]
    );
  };
  const handleApplianceSelect = (appliance) => {
    setSelectedAppliances(prev =>
      prev.map(a => normalizeText(a)).includes(normalizeText(appliance))
        ? prev.filter(a => normalizeText(a) !== normalizeText(appliance))
        : [...prev, appliance]
    );
  };
  const handleUstensilSelect = (ustensil) => {
    setSelectedUstensils(prev =>
      prev.map(u => normalizeText(u)).includes(normalizeText(ustensil))
        ? prev.filter(u => normalizeText(u) !== normalizeText(ustensil))
        : [...prev, ustensil]
    );
  };
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  
  const getTagColorClass = (type) => {
    if (type === 'ingredient') return 'button-filter-blue';
    if (type === 'appliance') return 'button-filter-green';
    if (type === 'ustensil') return 'button-filter-red';
    return '';
  };

  const renderTags = () => {
    const tags = [];
    selectedIngredients.forEach(ing => tags.push({type: 'ingredient', value: ing, handler: () => handleIngredientSelect(ing)}));
    selectedAppliances.forEach(app => tags.push({type: 'appliance', value: app, handler: () => handleApplianceSelect(app)}));
    selectedUstensils.forEach(ust => tags.push({type: 'ustensil', value: ust, handler: () => handleUstensilSelect(ust)}));
    
    if (tags.length === 0) return null;

    return (
        <div className="section-tag">
            {tags.map(tag => (
                <div key={`${tag.type}-${normalizeText(tag.value)}`} className={`tagFilter ${getTagColorClass(tag.type)}`}>
                    <span className="tagFilter-txt">{tag.value}</span>
                    <img src="/assets/removeTag.svg" alt="Remove tag" className="tagFilter-svg" onClick={tag.handler} />
                </div>
            ))}
        </div>
    );
  };

  return (
    <Router>
      <div className="App"> {/* Optionally add className={`App ${theme}-theme`} if body isn't used */}
        <Header />
        <Routes>
          <Route path="/" element={
            <HomePage
              searchTerm={searchTerm}
              selectedIngredients={selectedIngredients}
              selectedAppliances={selectedAppliances}
              selectedUstensils={selectedUstensils}
              filteredRecipes={filteredRecipes}
              availableIngredients={availableIngredients}
              availableAppliances={availableAppliances}
              availableUstensils={availableUstensils}
              handleSearchChange={handleSearchChange}
              handleIngredientSelect={handleIngredientSelect}
              handleApplianceSelect={handleApplianceSelect}
              handleUstensilSelect={handleUstensilSelect}
              renderTags={renderTags}
            />
          } />
          <Route path="/recipes/:id" element={<RecipePage recipes={recipesFullData} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
