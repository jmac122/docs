import React, { useState } from 'react';
import Mermaid from '@theme/Mermaid';

export default function ZoomableMermaid({ chart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="mermaid-zoomable"
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'zoom-in' }}
      >
        <div style={{ 
          textAlign: 'center', 
          fontSize: '0.8rem', 
          color: '#64748b',
          marginBottom: '0.5rem' 
        }}>
          🔍 Click diagram to expand
        </div>
        <Mermaid value={chart} />
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '2rem',
            overflow: 'auto',
          }}
        >
          <div 
            style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '8px',
              maxWidth: '95vw',
              maxHeight: '95vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              textAlign: 'right', 
              marginBottom: '1rem' 
            }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                ✕ Close
              </button>
            </div>
            <div style={{ minWidth: '800px' }}>
              <Mermaid value={chart} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
