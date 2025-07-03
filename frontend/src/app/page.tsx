'use client';
import { useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const res = await fetch('http://localhost:8000/bmi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight: parseFloat(weight), height: parseFloat(height) }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || 'Unbekannter Fehler');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-green-600">BMI Rechner</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4">
        <div>
          <label className="block text-sm font-medium">Gewicht (kg)</label>
          <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Größe (cm)</label>
          <input
            type="number"
            step="0.1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Berechnen
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow text-center">
          <p className="text-xl font-bold">Dein BMI: {result.bmi}</p>
          <p className="text-green-600 font-semibold">{result.category}</p>
        </div>
      )}

      {error && (
        <div className="mt-6 text-red-600">
          <p>❌ Fehler: {error}</p>
        </div>
      )}
    </main>
  );
}
