import React, { useState } from 'react';
import OriginalMermaid from '@theme-original/Mermaid';

export default function Mermaid(props) {
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
          marginBottom: '0.5rem',
          fontStyle: 'italic',
        }}>
          🔍 Click diagram to expand
        </div>
        <OriginalMermaid {...props} />
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
              borderRadius: '12px',
              maxWidth: '95vw',
              maxHeight: '95vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.5rem',
            }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Click outside or press ESC to close
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
              >
                ✕ Close
              </button>
            </div>
            <div style={{ minWidth: '800px', transform: 'scale(1.2)', transformOrigin: 'top left' }}>
              <OriginalMermaid {...props} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
