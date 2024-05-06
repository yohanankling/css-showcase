import React, { useState } from 'react';
import './sidebar.css';

function Sidebar({ setSelectedCategories }) {
    const [selectedCategories, setSelectedCategoriesInternal] = useState([]);

    const handleCategoryChange = (category) => {
        if (category === 'all') {
            setSelectedCategoriesInternal(['text', 'hover', 'button']);
            setSelectedCategories(['text', 'hover', 'button']);
        } else if (selectedCategories.includes(category)) {
            setSelectedCategoriesInternal(selectedCategories.filter((c) => c !== category));
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategoriesInternal([...selectedCategories, category]);
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-preferences">
                <h2>Preferences</h2>
                <div className="checkbox-container">
                    <button
                        className="sidebar-button"
                        onClick={() => handleCategoryChange('all')}
                        style={{
                            backgroundColor: selectedCategories.length === 0 ? 'lightgray' : 'transparent',
                        }}
                    >
                        All
                    </button>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('text')}
                            onChange={() => handleCategoryChange('text')}
                        />
                        Text
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('hover')}
                            onChange={() => handleCategoryChange('hover')}
                        />
                        Hover
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('button')}
                            onChange={() => handleCategoryChange('button')}
                        />
                        Button
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;