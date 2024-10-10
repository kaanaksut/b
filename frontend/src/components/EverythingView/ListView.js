import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosConfig';  // axiosConfig.js'i buradan import ediyoruz
import './ListView.css';

const ListView = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [newDescription, setNewDescription] = useState('')
  const [showForm, setShowForm] = useState(false);

  // useEffect ile listeleri API'den çekiyoruz
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data } = await axiosInstance.get('/lists');  // JWT olmadan istek
        setLists(data);
      } catch (error) {
        console.error('Error fetching lists', error);
      }
    };
    fetchLists();
  }, []);

  // Yeni liste ekleme fonksiyonu
  const handleAddList = async () => {
    if (newListName.trim() === '') return; // Boş liste eklenmesin
    try {
      const { data } = await axiosInstance.post(
        '/lists',
        { name: newListName,
          describtion: newDescription,
         }
      );
      setLists([...lists, data]); // Yeni listeyi mevcut listeye ekle
      setNewListName(''); // Liste eklendikten sonra input temizlensin
      setShowForm(false); // Form kapatılsın
    } catch (error) {
      console.error('Error creating list', error);
    }
  };

  return (
    <div className="list-container">
      <h2>Your Lists</h2>

      {/* Eğer liste yoksa mesaj göster */}
      {lists.length === 0 ? (
        <p>No lists yet. Create your first list!</p>
      ) : (
        lists.map((list) => (
          <div key={list._id} className="list-item">
            <h3>{list.name}</h3>
            <p>{list.describtion}</p>
          </div>
        ))
      )}

      {/* Liste ekleme formu */}
      {showForm ? (
        <div className="add-list-form">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Enter list name"
          /><input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter acıkalama list"
        />
          <button onClick={handleAddList}>Save List</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>+ Add List</button>
      )}
    </div>
  );
};

export default ListView;
