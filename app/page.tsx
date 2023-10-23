'use client'

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const transformResponseToString = (data : any) => {
  let resultStr = `Available Credit: ${data.available_credit}\n`;
  resultStr += `Payable Balance: ${data.payable_balance}\n`;

  if (data.pending_txns.length === 0) {
    resultStr += 'Pending Transactions: None\n';
  } else {
    resultStr += 'Pending Transactions:\n';
    data.pending_txns.forEach((txn: string) => {
      resultStr += `- ${txn}\n`;
    });
  }

  if (data.settled_txns.length === 0) {
    resultStr += 'Settled Transactions: None\n';
  } else {
    resultStr += 'Settled Transactions:\n';
    data.settled_txns.forEach((txn: string) => {
      resultStr += `- ${txn}\n`;
    });
  }

  return resultStr;
};




function TransactionApp() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [backendResult, setBackendResult] = useState('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const events = JSON.parse(input);
    // console.log(input);

    const payload = events

    const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRVNGVFoiLCJleHAiOjE2OTkzMDY1ODF9.b113FzuMu1_xXDFAdWcD6-6T5wDqjud9A3r96vAuhYw";
    const SERVER = "http://localhost:8000";
    try {
      const backendResponse = await fetch(`${SERVER}/api/transactions/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JWT
        },
        body: JSON.stringify(payload),
      });

      if (!backendResponse.ok) {
        throw new Error(`Backend returned code ${backendResponse.status}, message: ${backendResponse.statusText}`);
      }

      // Usage:
      const backendData = await backendResponse.json();
      const backendDataString = transformResponseToString(backendData);
      setBackendResult(backendDataString);

    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">

        <h3 className="sm:text-4xl text-2xl max-w-[708px] font-bold text-slate-900">
          Transaction App
        </h3>
        <form className="max-w-xl w-full" onSubmit={onSubmit}>
          <textarea
            value={input}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={'transaction json'}
          />
          {!isLoading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              type="submit"
            >
              Submit &rarr;
            </button>
          )}
          {isLoading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              Loading...
            </button>
          )}
        </form>
        {backendResult && (
          <>
            <div>
              <br/>
              <h2 className="sm:text-3xl text-3xl font-bold text-slate-900 mx-auto">
                Summary:
              </h2>
            </div>
            <pre className='text-l'>{backendResult}</pre>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default TransactionApp;
