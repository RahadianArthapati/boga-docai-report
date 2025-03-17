'use client';

import { Document } from "../types";
import { transformDocuments } from "../utils/transformData";
import { useState } from "react";
import { DocumentTable } from "./DocumentTable";
import { DateRangeSelector } from "./DateRangeSelector";

interface DocumentTableWrapperProps {
  initialData: Document[];
}

function DocumentTableWrapper({ initialData }: DocumentTableWrapperProps) {
  const [data, setData] = useState<Document[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = async (startDate: string, endDate: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://alpha.boga.co.id/WebAPIAlpha/api/OCRDocument/GetOCRChangesData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StartDate: startDate,
          EndDate: endDate
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const newData = await response.json();
      setData(newData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div>
        <DateRangeSelector onDateChange={handleDateChange} />
        <div className="rounded-md bg-red-50 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading data</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <DateRangeSelector onDateChange={handleDateChange} />
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <DocumentTable data={transformDocuments(data)} />
      )}
    </div>
  );
}

export default DocumentTableWrapper; 