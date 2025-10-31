import React, { useState, useMemo } from 'react';
import './styles.css';
import promptsData from './promptsData';

// Función para aplanar y asignar IDs
const flattenAndAssignIds = (data) => {
  const flattened = [];
  data.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.prompts.forEach((prompt, index) => {
        const uniqueId = `${category.title.substring(0,2)}-${subcategory.title.substring(0,2)}-${index}`;
        flattened.push({
          ...prompt,
          id: uniqueId,
          categoryTitle: category.title,
          categoryIcon: category.icon,
          subTitle: subcategory.title,
        });
      });
    });
  });
  return flattened;
};

// 1. Extraer variables (ej: [CLIENTE])
const extractVariables = (text) => {
  if (!text) return [];
  const matches = text.match(/\[([^\]]+)\]/g);
  if (!matches) return [];
  // Devuelve un array de strings únicos (ej: "CLIENTE", "AÑO")
  return [...new Set(matches.map(m => m.slice(1, -1)))];
};

// 2. Resaltar variables en el preview
const highlightVariables = (text) => {
  if (!text) return '';
  return text.replace(
    /(\[([^\]]+)\])/g,
    '<span class="highlight-variable">$1</span>'
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [showInstructions, setShowInstructions] = useState(false);

  // --- NUEVOS ESTADOS PARA EL MODAL ---
  const [selectedPrompt, setSelectedPrompt] = useState(null); // Guarda el prompt seleccionado
  const [variableValues, setVariableValues] = useState({}); // Guarda { "CLIENTE": "Pepito" }
  const [copied, setCopied] = useState(false);
  
  const PROMPTS_PER_PAGE = 6;

  // Aplanar todos los prompts
  const allPrompts = useMemo(() => flattenAndAssignIds(promptsData), []);

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = ['Todos', ...new Set(allPrompts.map(p => p.categoryTitle))];
    return cats;
  }, [allPrompts]);

  // Filtrar prompts
  const filteredPrompts = useMemo(() => {
    return allPrompts.filter(prompt => {
      const matchesSearch = 
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.subTitle.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'Todos' || 
        prompt.categoryTitle === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [allPrompts, searchTerm, selectedCategory]);

  // Paginación
  const totalPages = Math.ceil(filteredPrompts.length / PROMPTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROMPTS_PER_PAGE;
  const currentPrompts = filteredPrompts.slice(startIndex, startIndex + PROMPTS_PER_PAGE);

  // Resetear página cuando cambian filtros
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // --- NUEVAS FUNCIONES DEL MODAL ---

  // Obtiene el texto del prompt con las variables reemplazadas
  const getPersonalizedPrompt = () => {
    if (!selectedPrompt) return '';
    let text = selectedPrompt.prompt;
    Object.keys(variableValues).forEach(variable => {
      const regex = new RegExp(`\\[${variable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]`, 'g');
      const value = variableValues[variable] || `[${variable}]`;
      text = text.replace(regex, value);
    });
    return text;
  };

  const handleOpenModal = (prompt) => {
    const variables = extractVariables(prompt.prompt);
    const initialValues = {};
    variables.forEach(v => { initialValues[v] = ''; });
    
    setVariableValues(initialValues);
    setSelectedPrompt(prompt);
    setCopied(false);
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  };

  const handleCloseModal = () => {
    setSelectedPrompt(null);
    document.body.style.overflow = 'auto'; // Restaura scroll
  };

  const handleVariableChange = (variable, value) => {
    setVariableValues(prev => ({
      ...prev,
      [variable]: value
    }));
  };

  const resetForm = () => {
    const variables = extractVariables(selectedPrompt.prompt);
    const initialValues = {};
    variables.forEach(v => { initialValues[v] = ''; });
    setVariableValues(initialValues);
  };
  
  const handleCopy = () => {
    const promptContent = getPersonalizedPrompt();
    navigator.clipboard.writeText(promptContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = (aiType) => {
    const urls = {
      chatgpt: 'https://chat.openai.com/',
      claude: 'https://claude.ai/',
      gemini: 'https://gemini.google.com/'
    };
    
    const promptContent = getPersonalizedPrompt();
    navigator.clipboard.writeText(promptContent);
    window.open(urls[aiType], '_blank');
  };

  // --- FIN DE FUNCIONES DEL MODAL ---

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>Contador 4.0 Express</h1>
          <p className="header-subtitle">105 Prompts Especializados para Transformación con IA</p>
        </div>
        <button 
          className="instructions-btn"
          onClick={() => setShowInstructions(!showInstructions)}
        >
          {showInstructions ? '❌ Cerrar' : 'ℹ️ Cómo Usar'}
        </button>
      </header>

      {/* Instrucciones */}
      {showInstructions && (
        <div className="instructions-panel">
          <h3>📋 Instrucciones de Uso</h3>
          <ol>
            <li><strong>Explora:</strong> Usa Categorías o la barra de búsqueda para encontrar el prompt.</li>
            <li><strong>Personaliza:</strong> Haz clic en cualquier tarjeta para abrir el personalizador.</li>
            <li><strong>Rellena:</strong> Completa las variables (textos entre [CORCHETES]) con tu información.</li>
            <li><strong>Copia Fácil:</strong> El botón "Copiar" pone el prompt personalizado en tu portapapeles.</li>
            <li><strong>Ejecuta Directo:</strong> Los botones de ChatGPT, Claude o Gemini copian el prompt y abren la IA.</li>
            <li><strong>Navega:</strong> Usa "Siguiente" y "Anterior" para ver todos los prompts.</li>
          </ol>
        </div>
      )}

      <main className="main-content">
        {/* Controles de búsqueda y filtros */}
        <div className="controls-section">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar por título, contenido o subcategoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'Todos' ? '🎯' : ''} {cat.replace(/[\d\s\W]*/, '').substring(0, 30)}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="results-info">
          <p>
            Mostrando <strong>{currentPrompts.length}</strong> de <strong>{filteredPrompts.length}</strong> prompts
            {searchTerm && ` para "${searchTerm}"`}
            {selectedCategory !== 'Todos' && ` en ${selectedCategory.replace(/[\d\s\W]*/, '')}`}
          </p>
        </div>

        {/* Grid de Prompts */}
        {currentPrompts.length > 0 ? (
          <div className="prompts-grid">
            {currentPrompts.map((prompt) => (
              <div 
                key={prompt.id} 
                className="prompt-card"
                onClick={() => handleOpenModal(prompt)}
              >
                <div className="prompt-card-header">
                  <span className="prompt-category-badge">
                    {prompt.categoryIcon} {prompt.categoryTitle.replace(/[\d\s\W]*/, '')}
                  </span>
                  <span className="prompt-subcategory-badge">
                    {prompt.subTitle}
                  </span>
                </div>
                
                <h3 className="prompt-card-title">{prompt.title}</h3>
                
                <div className="prompt-card-content">
                  <p className="prompt-description">
                    {prompt.prompt.substring(0, 150)}...
                  </p>
                  <p className="click-hint">
                    → Clic para personalizar y usar
                  </p>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>😕 No se encontraron prompts con esos criterios</p>
            <button 
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Anterior
            </button>
            
            <div className="pagination-info">
              Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
            </div>
            
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Siguiente →
            </button>
          </div>
        )}

        {/* Tips Section */}
        <div className="tips-section">
          <h3>💡 Consejos para Maximizar tu Uso de IA</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-icon">🎯</span>
              <p><strong>Sé Específico:</strong> Personaliza las variables [EN CORCHETES] con información detallada de tu contexto.</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🔄</span>
              <p><strong>Itera:</strong> Si la respuesta no es perfecta, pide a la IA que refine o ajuste el resultado.</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🤝</span>
              <p><strong>Combina:</strong> Usa múltiples prompts en secuencia para análisis más profundos.</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">📚</span>
              <p><strong>Aprende:</strong> Observa cómo estructura cada prompt para crear los tuyos propios.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          <strong>Contador 4.0 Express</strong> es un complemento del E-Book "Contador 4.0: Sistema de Transformación con IA para Contadores" 
          que incluye 105 prompts especializados. Desarrollado por{' '}
          <a href="https://jairoamaya.co" target="_blank" rel="noopener noreferrer">
            Jairo Amaya - Full Stack Marketer
          </a>
          . Todos los derechos reservados © {new Date().getFullYear()}.
        </p>
      </footer>

      {/* --- INICIO DEL NUEVO MODAL --- */}
      {selectedPrompt && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header">
              <button className="modal-close" onClick={handleCloseModal}>×</button>
              <div className="breadcrumb">
                <span>{selectedPrompt.categoryIcon}</span>
                <span>{selectedPrompt.categoryTitle.replace(/[\d\s\W]*/, '')} › {selectedPrompt.subTitle}</span>
              </div>
              <h2 className="modal-title">{selectedPrompt.title}</h2>
              <span className="variables-badge">
                {extractVariables(selectedPrompt.prompt).length} variables para personalizar
              </span>
            </div>
            
            <div className="modal-body">
              
              {/* Sección de Variables (si existen) */}
              {extractVariables(selectedPrompt.prompt).length > 0 && (
                <div className="variables-section">
                  <div className="variables-header">
                    <h3 className="variables-title">
                      ✏️ Personalizar Variables ({extractVariables(selectedPrompt.prompt).length})
                    </h3>
                    <button className="reset-btn" onClick={resetForm}>🔄 Reset</button>
                  </div>
                  <div className="inputs-grid">
                    {extractVariables(selectedPrompt.prompt).map(variable => (
                      <div className="input-group" key={variable}>
                        <label className="input-label">{variable.replace(/_/g, ' ')}</label>
                        <input 
                          type="text" 
                          className="input-field"
                          placeholder={`Ingresa ${variable.toLowerCase().replace(/_/g, ' ')}`}
                          value={variableValues[variable] || ''}
                          onChange={(e) => handleVariableChange(variable, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botones de Acción */}
              <div className="action-buttons-container">
                <button 
                  className={`btn-copy-main ${copied ? 'copied' : ''}`} 
                  onClick={handleCopy}
                >
                  {copied ? '✅ ¡Copiado!' : '📋 Copiar Prompt Personalizado'}
                </button>
                <div className="ai-buttons-row">
                  <button className="btn-ai claude" onClick={() => handleOpenAI('claude')}>Usar en Claude</button>
                  <button className="btn-ai chatgpt" onClick={() => handleOpenAI('chatgpt')}>Usar en ChatGPT</button>
                  <button className="btn-ai gemini" onClick={() => handleOpenAI('gemini')}>Usar en Gemini</button>
                </div>
              </div>

              {/* Contenido del Prompt (Preview) */}
              <div className="original-content">
                <h3 className="section-title">📄 Prompt Personalizado (Vista Previa)</h3>
                <div 
                  className="prompt-preview"
                  dangerouslySetInnerHTML={{ __html: highlightVariables(getPersonalizedPrompt()) }}
                />
              </div>

            </div>
          </div>
        </div>
      )}
      {/* --- FIN DEL NUEVO MODAL --- */}
    </div>
  );
}
