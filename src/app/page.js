"use client"
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("")
  
  const sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Email submitted successfully!');
        setEmail('');
      } else {
        alert(result.message || 'Something went wrong.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 text-white">
      <h1>Digite aqui seu melhor email</h1>
      <input 
        type="text" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="text-black rounded-md"
      />
      <button 
        onClick={sendData}
        className="bg-white pl-3 pr-3 rounded-md text-black"
      >enviar</button>
    </main>
  );
}
