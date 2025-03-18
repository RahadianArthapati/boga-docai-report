import { Document } from "@/types";
import DocumentTableWrapper from '../components/DocumentTableWrapper';

// Function to get today's date in yyyy-mm-dd format
const getTodayFormatted = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

async function getDocumentData() {
  try {
    const response = await fetch('https://alpha.boga.co.id/WebAPIAlpha/api/OCRDocument/GetOCRChangesData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        StartDate: "2025-01-01",
        EndDate: getTodayFormatted()
      }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default async function Home() {
  const data = await getDocumentData();

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-[90rem] mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">DocAI Report</h1>
          <p className="mt-2 text-sm text-slate-700">
            Track changes and corrections made to processed documents
          </p>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <DocumentTableWrapper initialData={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
