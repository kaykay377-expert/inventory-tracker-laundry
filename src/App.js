import React, { useState, useEffect } from 'react';
import { Search, Plus, Trash2, AlertTriangle, CheckCircle, Package, BarChart3, X, Minus, RotateCcw, AlertCircle, PackageX, PackageCheck, Edit, DollarSign } from 'lucide-react';

const App = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Gain orginal small bottle', category: 'Detergents', quantity: 2, threshold: 4, unitCost: 12.50, lastUpdated: '2025-11-10' },
    { id: 2, name: 'Downy small bottle', category: 'Detergents', quantity: 4, threshold: 3, unitCost: 8.75, lastUpdated: '2025-11-09' },
    { id: 3, name: 'Tide small bottle', category: 'Detergents', quantity: 5, threshold: 5, unitCost: 12.50, lastUpdated: '2025-11-11' },
    { id: 4, name: 'Tide yellow small bottle', category: 'Detergents', quantity: 7, threshold: 3, unitCost: 12.50, lastUpdated: '2025-11-08' },
    { id: 5, name: 'bounce packet box\'s', category: 'Detergents', quantity: 1, threshold: 2, unitCost: 2.30, lastUpdated: '2025-11-07' },
    { id: 6, name: 'Bounce Sheets', category: 'Detergents', quantity: 0, threshold: 3, unitCost: 4.15, lastUpdated: '2025-11-10' },
    { id: 7, name: 'WDF powder soap', category: 'Detergents', quantity: 5, threshold: 2, unitCost: 18.90, lastUpdated: '2025-11-09' },
    { id: 8, name: 'blue gloves box', category: 'Accessories', quantity: 0, threshold: 3, unitCost: 3.45, lastUpdated: '2025-11-11' },
    { id: 9, name: 'white gloves box', category: 'Accessories', quantity: 10, threshold: 3, unitCost: 3.45, lastUpdated: '2025-11-08' },
    { id: 10, name: 'Laundry bag(cloth material large BUNDLES)', category: 'Accessories', quantity: 25, threshold: 2, unitCost: 5.00, lastUpdated: '2025-11-07' },
    { id: 11, name: 'gain detergent small box', category: 'Detergents', quantity: 2, threshold: 2, unitCost: 15.00, lastUpdated: '2025-11-10' },
    { id: 12, name: 'tide detergent small box', category: 'Detergents', quantity: 4, threshold: 2, unitCost: 15.00, lastUpdated: '2025-11-09' },
    { id: 13, name: 'downy detergent small box', category: 'Detergents', quantity: 2, threshold: 2, unitCost: 15.00, lastUpdated: '2025-11-11' },
    { id: 14, name: 'tiolet tissues box', category: 'Cleaning Supplies', quantity: 1, threshold: 1, unitCost: 1.20, lastUpdated: '2025-11-08' },
    { id: 15, name: 'Vend Rite Box (Green)', category: 'Accessories', quantity: 2, threshold: 2, unitCost: 25.00, lastUpdated: '2025-11-07' },
    { id: 16, name: 'clorex box', category: 'Detergents', quantity: 1, threshold: 1, unitCost: 18.50, lastUpdated: '2025-11-10' },
    { id: 17, name: 'Clorex 2 box', category: 'Detergents', quantity: 2, threshold: 1, unitCost: 18.50, lastUpdated: '2025-11-09' },
    { id: 18, name: 'snuggle sheet', category: 'Detergents', quantity: 1, threshold: 1, unitCost: 2.50, lastUpdated: '2025-11-11' },
    { id: 19, name: 'Snuggle liquid', category: 'Detergents', quantity: 1, threshold: 1, unitCost: 8.90, lastUpdated: '2025-11-08' },
    { id: 20, name: 'oxi clean box', category: 'Detergents', quantity: 1, threshold: 1, unitCost: 6.20, lastUpdated: '2025-11-07' },
    { id: 21, name: 'receipt rolls- YELLOW', category: 'Accessories', quantity: 1, threshold: 1, unitCost: 3.50, lastUpdated: '2025-11-10' },
    { id: 22, name: 'receipt rolls- RED', category: 'Accessories', quantity: 0, threshold: 1, unitCost: 3.50, lastUpdated: '2025-11-09' },
    { id: 23, name: 'receipt rolls- WHITE', category: 'Accessories', quantity: 2, threshold: 1, unitCost: 3.50, lastUpdated: '2025-11-11' },
    { id: 24, name: 'Anysoap Vendor Box (Blue)', category: 'Accessories', quantity: 2, threshold: 2, unitCost: 25.00, lastUpdated: '2025-11-08' },
    { id: 25, name: 'trash cover box', category: 'Cleaning Supplies', quantity: 1, threshold: 1, unitCost: 8.00, lastUpdated: '2025-11-07' },
    { id: 26, name: 'gain medim size bottle', category: 'Detergents', quantity: 3, threshold: 5, unitCost: 15.00, lastUpdated: '2025-11-10' },
    { id: 27, name: 'tide medium size bottle', category: 'Detergents', quantity: 2, threshold: 5, unitCost: 15.00, lastUpdated: '2025-11-09' },
    { id: 28, name: 'downy medium size bottle', category: 'Detergents', quantity: 6, threshold: 5, unitCost: 15.00, lastUpdated: '2025-11-11' },
    { id: 29, name: 'Color Dye Catcher', category: 'Detergents', quantity: 0, threshold: 3, unitCost: 4.50, lastUpdated: '2025-11-08' },
    { id: 30, name: 'Shout', category: 'Detergents', quantity: 0, threshold: 3, unitCost: 7.90, lastUpdated: '2025-11-07' },
    { id: 31, name: 'SAFETY PINS', category: 'Accessories', quantity: 0, threshold: 3, unitCost: 1.50, lastUpdated: '2025-11-10' },
    { id: 32, name: 'STAPPLER PINS', category: 'Accessories', quantity: 4, threshold: 2, unitCost: 1.00, lastUpdated: '2025-11-09' },
    { id: 33, name: 'TWIST TIES (BLUE & GREEN)', category: 'Accessories', quantity: 2, threshold: 2, unitCost: 0.50, lastUpdated: '2025-11-11' },
    { id: 34, name: 'NO CREASES TAGS', category: 'Tags', quantity: 2, threshold: 3, unitCost: 0.25, lastUpdated: '2025-11-08' },
    { id: 35, name: 'CREASES TAGS', category: 'Tags', quantity: 2, threshold: 3, unitCost: 0.25, lastUpdated: '2025-11-07' },
    { id: 36, name: 'Heavy Starch Tag', category: 'Tags', quantity: 2, threshold: 2, unitCost: 0.25, lastUpdated: '2025-11-10' },
    { id: 37, name: 'Prespot tags', category: 'Tags', quantity: 0, threshold: 1, unitCost: 0.25, lastUpdated: '2025-11-09' },
    { id: 38, name: 'Green Blank Tag', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.25, lastUpdated: '2025-11-11' },
    { id: 39, name: '1-NUM TAGS DC- JEFFERSON', category: 'Tags', quantity: 0, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-08' },
    { id: 40, name: '2- NUM TAGS DC- JEFFERSON', category: 'Tags', quantity: 2, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-07' },
    { id: 41, name: '3-NUM TAG DC- JEFFERSON', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-10' },
    { id: 42, name: '4-NUM TAG DC- JEFFERSON', category: 'Tags', quantity: 2, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-09' },
    { id: 43, name: '5-NUM TAG DC- JEFFERSON', category: 'Tags', quantity: 3, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-11' },
    { id: 44, name: '6-NUM  TAG DC- JEFFERSON', category: 'Tags', quantity: 2, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-08' },
    { id: 45, name: '7-NUM  TAG DC- JEFFERSON', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-07' },
    { id: 46, name: '8-NUM TAG DC- JEFFERSON', category: 'Tags', quantity: 2, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-10' },
    { id: 47, name: '1-NUM TAGS DC- LAKE', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-09' },
    { id: 48, name: '2- NUM TAGS DC- LAKE', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-11' },
    { id: 49, name: '3-NUM TAG DC- LAKE', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-08' },
    { id: 50, name: '4-NUM TAG DC- LAKE', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-07' },
    { id: 51, name: '5-NUM TAG DC- LAKE', category: 'Tags', quantity: 0, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-10' },
    { id: 52, name: '6-NUM  TAG DC- LAKE', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-09' },
    { id: 53, name: '7-NUM TAG DC- LAKE', category: 'Tags', quantity: 2, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-11' },
    { id: 54, name: '8-NUM TAG DC- LAKE', category: 'Tags', quantity: 2, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-08' },
    { id: 55, name: '1-NUM TAGS DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-07' },
    { id: 56, name: '2- NUM TAGS DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-10' },
    { id: 57, name: '3-NUM TAG DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-09' },
    { id: 58, name: '4-NUM TAG DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-11' },
    { id: 59, name: '5-NUM TAG DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-08' },
    { id: 60, name: '6-NUM  TAG DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-07' },
    { id: 61, name: '7-NUM TAG DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-10' },
    { id: 62, name: '8-NUM TAG DC- LIMA', category: 'Tags', quantity: 1, threshold: 1, unitCost: 0.30, lastUpdated: '2025-11-09' },
    { id: 63, name: 'Drycleaning thank you cards', category: 'Marketing', quantity: 0, threshold: 2, unitCost: 0.50, lastUpdated: '2025-11-11' },
    { id: 64, name: 'Ozone thank you cards', category: 'Marketing', quantity: 4, threshold: 2, unitCost: 0.50, lastUpdated: '2025-11-08' },
    { id: 65, name: 'TRASH', category: 'Cleaning Supplies', quantity: 1, threshold: 1, unitCost: 12.00, lastUpdated: '2025-11-07' },
    { id: 66, name: 'STAINLESS STEEL (BOX)', category: 'Cleaning Supplies', quantity: 0, threshold: 1, unitCost: 25.00, lastUpdated: '2025-11-10' },
    { id: 67, name: 'TIOLET TISSUES', category: 'Cleaning Supplies', quantity: 1, threshold: 1, unitCost: 0.80, lastUpdated: '2025-11-09' },
    { id: 68, name: 'HAND SOAP', category: 'Cleaning Supplies', quantity: 2, threshold: 2, unitCost: 3.50, lastUpdated: '2025-11-11' },
    { id: 69, name: 'GOO OFF', category: 'Cleaning Supplies', quantity: 0, threshold: 2, unitCost: 4.99, lastUpdated: '2025-11-08' },
    { id: 70, name: '409', category: 'Cleaning Supplies', quantity: 0, threshold: 1, unitCost: 3.99, lastUpdated: '2025-11-07' },
    { id: 71, name: 'GOO OFF', category: 'Cleaning Supplies', quantity: 0, threshold: 2, unitCost: 4.99, lastUpdated: '2025-11-10' },
    { id: 72, name: 'Leather wipes', category: 'Cleaning Supplies', quantity: 5, threshold: 1, unitCost: 2.99, lastUpdated: '2025-11-09' },
    { id: 73, name: 'Toilet Bowl cleaner', category: 'Cleaning Supplies', quantity: 1, threshold: 1, unitCost: 4.50, lastUpdated: '2025-11-11' },
    { id: 74, name: 'SMALL LAUNDRY STORE BAGS', category: 'Bags', quantity: 10, threshold: 1, unitCost: 0.75, lastUpdated: '2025-11-08' },
    { id: 75, name: 'MEDIUM LAUNDRY STORE BAGS', category: 'Bags', quantity: 5, threshold: 1, unitCost: 0.85, lastUpdated: '2025-11-07' },
    { id: 76, name: 'LARGE LAUNDRY STORE BAGS', category: 'Bags', quantity: 5, threshold: 1, unitCost: 0.95, lastUpdated: '2025-11-10' },
    { id: 77, name: 'COMFORTER BAGS', category: 'Bags', quantity: 1, threshold: 1, unitCost: 1.50, lastUpdated: '2025-11-09' },
    { id: 78, name: 'Small WDF bags', category: 'Bags', quantity: 2, threshold: 1, unitCost: 1.20, lastUpdated: '2025-11-11' },
    { id: 79, name: 'Large WDF bags', category: 'Bags', quantity: 1, threshold: 1, unitCost: 1.40, lastUpdated: '2025-11-08' },
    { id: 80, name: 'PANT HANGERS (FULL BOX)', category: 'Hangers', quantity: 1, threshold: 1, unitCost: 25.00, lastUpdated: '2025-11-07' },
    { id: 81, name: 'SHIRTHANGERS (FULL BOX)', category: 'Hangers', quantity: 1, threshold: 1, unitCost: 25.00, lastUpdated: '2025-11-10' },
    { id: 82, name: 'Dawn dish soap', category: 'Cleaning Supplies', quantity: 1, threshold: 1, unitCost: 4.99, lastUpdated: '2025-11-09' },
    { id: 83, name: 'Lake heat seal', category: 'Accessories', quantity: 0, threshold: 1, unitCost: 0.10, lastUpdated: '2025-11-11' },
    { id: 84, name: 'Lima heat seal', category: 'Accessories', quantity: 0, threshold: 1, unitCost: 0.10, lastUpdated: '2025-11-08' },
    { id: 85, name: 'Jefferson heat seal', category: 'Accessories', quantity: 2, threshold: 1, unitCost: 0.10, lastUpdated: '2025-11-07' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingThreshold, setEditingThreshold] = useState(null);
  const [thresholdValue, setThresholdValue] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(null);
  const [transferQuantity, setTransferQuantity] = useState(1);
  const [showAddQuantityModal, setShowAddQuantityModal] = useState(null);
  const [addQuantity, setAddQuantity] = useState(1);
  const [showOutboundModal, setShowOutboundModal] = useState(null);
  const [outboundQuantity, setOutboundQuantity] = useState(1);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    threshold: '',
    unitCost: '',
    lastUpdated: new Date().toISOString().split('T')[0]
  });

  const [recentlyDeleted, setRecentlyDeleted] = useState([]);
  const [recentlyUpdated, setRecentlyUpdated] = useState([]);

  const [categories, setCategories] = useState(['Detergents', 'Cleaning Supplies', 'Accessories', 'Machinery Parts', 'Tags', 'Marketing', 'Bags', 'Hangers']);

  const lowStockItems = inventory.filter(item => item.quantity <= item.threshold);
  const outOfStockItems = inventory.filter(item => item.quantity === 0);
  const totalInventoryValue = inventory.reduce((total, item) => total + (item.quantity * item.unitCost), 0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      const updatedItem = { 
        ...formData, 
        id: editingItem.id,
        quantity: parseInt(formData.quantity),
        threshold: parseInt(formData.threshold),
        unitCost: parseFloat(formData.unitCost),
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      setInventory(inventory.map(item => 
        item.id === editingItem.id ? updatedItem : item
      ));
      setRecentlyUpdated([...recentlyUpdated, { oldItem: editingItem, newItem: updatedItem }]);
      setEditingItem(null);
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
        quantity: parseInt(formData.quantity),
        threshold: parseInt(formData.threshold),
        unitCost: parseFloat(formData.unitCost),
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      setInventory([...inventory, newItem]);
    }
    setFormData({
      name: '',
      category: '',
      quantity: '',
      threshold: '',
      unitCost: '',
      lastUpdated: new Date().toISOString().split('T')[0]
    });
    setShowAddForm(false);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      threshold: item.threshold,
      unitCost: item.unitCost,
      lastUpdated: item.lastUpdated
    });
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    const deletedItem = inventory.find(item => item.id === id);
    setRecentlyDeleted([...recentlyDeleted, deletedItem]);
    setInventory(inventory.filter(item => item.id !== id));
  };

  const undoDelete = () => {
    if (recentlyDeleted.length > 0) {
      const lastDeleted = recentlyDeleted[recentlyDeleted.length - 1];
      setInventory([...inventory, lastDeleted]);
      setRecentlyDeleted(recentlyDeleted.slice(0, -1));
    }
  };

  const undoUpdate = () => {
    if (recentlyUpdated.length > 0) {
      const lastUpdate = recentlyUpdated[recentlyUpdated.length - 1];
      setInventory(inventory.map(item => 
        item.id === lastUpdate.newItem.id ? lastUpdate.oldItem : item
      ));
      setRecentlyUpdated(recentlyUpdated.slice(0, -1));
    }
  };

  const startEditingThreshold = (item) => {
    setEditingThreshold(item.id);
    setThresholdValue(item.threshold);
  };

  const saveThreshold = (itemId) => {
    const updatedInventory = inventory.map(item => 
      item.id === itemId 
        ? { 
            ...item, 
            threshold: parseInt(thresholdValue), 
            lastUpdated: new Date().toISOString().split('T')[0] 
          } 
        : item
    );
    setRecentlyUpdated([...recentlyUpdated, { 
      oldItem: inventory.find(i => i.id === itemId), 
      newItem: updatedInventory.find(i => i.id === itemId) 
    }]);
    setInventory(updatedInventory);
    setEditingThreshold(null);
  };

  const cancelEditingThreshold = () => {
    setEditingThreshold(null);
  };

  const startTransfer = (item) => {
    setShowTransferModal(item);
    setTransferQuantity(1);
  };

  const completeTransfer = () => {
    if (transferQuantity > 0 && transferQuantity <= showTransferModal.quantity) {
      const updatedInventory = inventory.map(item => 
        item.id === showTransferModal.id 
          ? { 
              ...item, 
              quantity: item.quantity - transferQuantity,
              lastUpdated: new Date().toISOString().split('T')[0]
            } 
          : item
      );
      setRecentlyUpdated([...recentlyUpdated, { 
        oldItem: showTransferModal, 
        newItem: updatedInventory.find(i => i.id === showTransferModal.id) 
      }]);
      setInventory(updatedInventory);
      setShowTransferModal(null);
      setTransferQuantity(1);
    }
  };

  const startAddQuantity = (item) => {
    setShowAddQuantityModal(item);
    setAddQuantity(1);
  };

  const completeAddQuantity = () => {
    if (addQuantity > 0) {
      const updatedInventory = inventory.map(item => 
        item.id === showAddQuantityModal.id 
          ? { 
              ...item, 
              quantity: item.quantity + addQuantity,
              lastUpdated: new Date().toISOString().split('T')[0]
            } 
          : item
      );
      setRecentlyUpdated([...recentlyUpdated, { 
        oldItem: showAddQuantityModal, 
        newItem: updatedInventory.find(i => i.id === showAddQuantityModal.id) 
      }]);
      setInventory(updatedInventory);
      setShowAddQuantityModal(null);
      setAddQuantity(1);
    }
  };

  const startOutbound = (item) => {
    setShowOutboundModal(item);
    setOutboundQuantity(1);
  };

  const completeOutbound = () => {
    if (outboundQuantity > 0 && outboundQuantity <= showOutboundModal.quantity) {
      const updatedInventory = inventory.map(item => 
        item.id === showOutboundModal.id 
          ? { 
              ...item, 
              quantity: item.quantity - outboundQuantity,
              lastUpdated: new Date().toISOString().split('T')[0]
            } 
          : item
      );
      setRecentlyUpdated([...recentlyUpdated, { 
        oldItem: showOutboundModal, 
        newItem: updatedInventory.find(i => i.id === showOutboundModal.id) 
      }]);
      setInventory(updatedInventory);
      setShowOutboundModal(null);
      setOutboundQuantity(1);
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
      setShowAddCategoryModal(false);
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory ? item.category === filterCategory : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              Laundry Xpress
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Inventory Tracker</h1>
          </div>
          <div className="text-sm text-gray-600">
            Main Store - Fort Wayne, IN
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8 overflow-x-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 min-w-[180px]">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 min-w-[180px]">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-gray-900">{lowStockItems.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 min-w-[180px]">
            <div className="flex items-center">
              <PackageX className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-gray-900">{outOfStockItems.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 min-w-[180px]">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Stock</p>
                <p className="text-2xl font-bold text-gray-900">{inventory.length - lowStockItems.length - outOfStockItems.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 min-w-[220px]">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">${totalInventoryValue.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Undo Actions */}
        {(recentlyDeleted.length > 0 || recentlyUpdated.length > 0) && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {recentlyDeleted.length > 0 && (
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-blue-800">Item deleted: {recentlyDeleted[recentlyDeleted.length - 1].name}</span>
                </div>
              )}
              {recentlyUpdated.length > 0 && (
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-blue-800">Item updated: {recentlyUpdated[recentlyUpdated.length - 1].newItem.name}</span>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              {recentlyDeleted.length > 0 && (
                <button
                  onClick={undoDelete}
                  className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Undo Delete</span>
                </button>
              )}
              {recentlyUpdated.length > 0 && (
                <button
                  onClick={undoUpdate}
                  className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Undo Update</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <button
                onClick={() => setShowAddCategoryModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Add Category</span>
              </button>
              
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Add Item</span>
              </button>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thresh</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map((item) => (
                  <tr key={item.id} className={item.quantity <= item.threshold ? 'bg-yellow-50' : ''}>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.category}</div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.quantity === 0 
                          ? 'bg-red-100 text-red-800' 
                          : item.quantity <= item.threshold 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {item.quantity}
                      </span>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{item.threshold}</span>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                      ${item.unitCost.toFixed(2)}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                      {item.lastUpdated}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => startOutbound(item)}
                        className="text-red-600 hover:text-red-900 mr-2"
                        title="Track items leaving store"
                      >
                        <PackageCheck className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => startTransfer(item)}
                        className="text-orange-600 hover:text-orange-900 mr-2"
                        title="Transfer to other stores"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => startAddQuantity(item)}
                        className="text-blue-600 hover:text-blue-900 mr-2"
                        title="Add quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900 mr-2"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {editingItem ? 'Edit Item' : 'Add New Item'}
                  </h2>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingItem(null);
                      setFormData({
                        name: '',
                        category: '',
                        quantity: '',
                        threshold: '',
                        unitCost: '',
                        lastUpdated: new Date().toISOString().split('T')[0]
                      });
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Item Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Threshold
                      </label>
                      <input
                        type="number"
                        name="threshold"
                        value={formData.threshold}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unit Cost ($)
                    </label>
                    <input
                      type="number"
                      name="unitCost"
                      value={formData.unitCost}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Updated
                    </label>
                    <input
                      type="date"
                      name="lastUpdated"
                      value={formData.lastUpdated}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      {editingItem ? 'Update Item' : 'Add Item'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingItem(null);
                        setFormData({
                          name: '',
                          category: '',
                          quantity: '',
                          threshold: '',
                          unitCost: '',
                          lastUpdated: new Date().toISOString().split('T')[0]
                        });
                      }}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Transfer Modal */}
        {showTransferModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Transfer Item to Other Stores
                  </h2>
                  <button
                    onClick={() => setShowTransferModal(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Item: {showTransferModal.name}</p>
                  <p className="text-sm text-gray-600">Current Quantity: {showTransferModal.quantity}</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity to Transfer
                  </label>
                  <input
                    type="number"
                    value={transferQuantity}
                    onChange={(e) => setTransferQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max={showTransferModal.quantity}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Available: {showTransferModal.quantity}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={completeTransfer}
                    disabled={transferQuantity > showTransferModal.quantity || transferQuantity <= 0}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    Confirm Transfer
                  </button>
                  <button
                    onClick={() => setShowTransferModal(null)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Quantity Modal */}
        {showAddQuantityModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Add Quantity to Item
                  </h2>
                  <button
                    onClick={() => setShowAddQuantityModal(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Item: {showAddQuantityModal.name}</p>
                  <p className="text-sm text-gray-600">Current Quantity: {showAddQuantityModal.quantity}</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity to Add
                  </label>
                  <input
                    type="number"
                    value={addQuantity}
                    onChange={(e) => setAddQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={completeAddQuantity}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    Add Quantity
                  </button>
                  <button
                    onClick={() => setShowAddQuantityModal(null)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Outbound Modal */}
        {showOutboundModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Track Items Leaving Store
                  </h2>
                  <button
                    onClick={() => setShowOutboundModal(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Item: {showOutboundModal.name}</p>
                  <p className="text-sm text-gray-600">Current Quantity: {showOutboundModal.quantity}</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity Going Out
                  </label>
                  <input
                    type="number"
                    value={outboundQuantity}
                    onChange={(e) => setOutboundQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max={showOutboundModal.quantity}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Available: {showOutboundModal.quantity}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={completeOutbound}
                    disabled={outboundQuantity > showOutboundModal.quantity || outboundQuantity <= 0}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    Confirm Outbound
                  </button>
                  <button
                    onClick={() => setShowOutboundModal(null)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Category Modal */}
        {showAddCategoryModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Add New Category
                  </h2>
                  <button
                    onClick={() => {
                      setShowAddCategoryModal(false);
                      setNewCategory('');
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter new category name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddCategory}
                    disabled={!newCategory.trim() || categories.includes(newCategory.trim())}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    Add Category
                  </button>
                  <button
                    onClick={() => {
                      setShowAddCategoryModal(false);
                      setNewCategory('');
                    }}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
                
                {categories.includes(newCategory.trim()) && newCategory.trim() && (
                  <p className="text-sm text-red-600 mt-2">Category already exists</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

