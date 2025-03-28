'use client';

import { useState } from 'react';

interface DateRangeSelectorProps {
  onDateChange: (startDate: string, endDate: string) => void;
  defaultStartDate?: string;
  defaultEndDate?: string;
}

// Function to get today's date in yyyy-mm-dd format
const getTodayFormatted = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export function DateRangeSelector({ 
  onDateChange,
  defaultStartDate = "2025-01-01",
  defaultEndDate = getTodayFormatted()
}: DateRangeSelectorProps) {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure the date is in yyyy-mm-dd format
    if (/^\d{4}-\d{2}-\d{2}$/.test(value) || value === '') {
      setStartDate(value);
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure the date is in yyyy-mm-dd format
    if (/^\d{4}-\d{2}-\d{2}$/.test(value) || value === '') {
      setEndDate(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      console.log(startDate, endDate);
      onDateChange(startDate, endDate);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap items-end gap-4">
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-slate-900 mb-1">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          pattern="\d{4}-\d{2}-\d{2}"
          required
          className="block w-full px-3 py-2 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-slate-900 mb-1">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          pattern="\d{4}-\d{2}-\d{2}"
          required
          className="block w-full px-3 py-2 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Filter
      </button>
    </form>
  );
} 