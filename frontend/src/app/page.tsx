'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = async () => {
    try {
      const response = await fetch('http://localhost:8000/bmi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight: Number(weight), height: Number(height) }),
      });
      const data = await response.json();
      setBmi(data.bmi);
      setCategory(data.category);
    } catch (error) {
      setBmi(null);
      setCategory('❌ Fehler: Verbindung zum Server fehlgeschlagen');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header mit STRIVE-Logo */}
      <header style={{ 
        width: '100%', 
        padding: '12px 16px', 
        backgroundColor: '#1B2A75', 
        display: 'flex', 
        alignItems: 'center' 
      }}>
        <Image src="/strive-logo.png" alt="STRIVE Logo" width={68} height={68} style={{ marginRight: '8px' }} />
        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>STRIVE BMI-Rechner</h1>
      </header>

      {/* BMI Rechner - Zentriert */}
      <div style={{ 
        height: 'calc(100vh - 80px)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '16px'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '448px', 
          padding: '32px 24px', 
          border: '1px solid #d1d5db', 
          borderRadius: '8px', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#1B2A75', 
            marginBottom: '16px', 
            textAlign: 'center',
            margin: '0 0 16px 0'
          }}>BMI berechnen</h2>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '4px', 
              fontWeight: '500' 
            }}>Gewicht (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{ 
                width: '100%', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px', 
                padding: '8px 12px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '4px', 
              fontWeight: '500' 
            }}>Größe (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{ 
                width: '100%', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px', 
                padding: '8px 12px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <button
            onClick={calculateBMI}
            style={{ 
              width: '100%', 
              backgroundColor: '#BBC52C', 
              color: 'white', 
              fontWeight: 'bold', 
              padding: '8px 16px', 
              borderRadius: '4px',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#a6b028'}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#BBC52C'}
          >
            Berechnen
          </button>
          
          {bmi !== null && (
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <p style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: '#1B2A75',
                margin: '0 0 8px 0'
              }}>BMI: {bmi}</p>
              <p style={{ 
                fontSize: '16px', 
                color: '#374151',
                margin: '0'
              }}>{category}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}