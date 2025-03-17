import { Document, DocumentTableRow, Value } from "@/types";

const getHeaderValue = (header: Document['Header'], name: string): Value => {
  const item = header.find(h => h.name === name);
  return item ? item.value : { original: '', modified: '' };
};

const getDetailValue = (detail: Document['Detail'], name: string): Value => {
  if (!detail || detail.length === 0) return { original: '', modified: '' };
  const item = detail[0].Data.find(d => d.name === name);
  return item ? item.value : { original: '', modified: '' };
};

export const transformDocuments = (documents: Document[]): DocumentTableRow[] => {
  return documents.map(doc => ({
    transactionId: doc.TransactionID,
    document: doc.DocumentName,
    date: getDetailValue(doc.Detail, 'InvoiceDate').original,
    companyId: getHeaderValue(doc.Header, 'CompanyID'),
    brandId: getHeaderValue(doc.Header, 'BrandID'),
    outletId: getHeaderValue(doc.Header, 'OutletID'),
    vendorName: getHeaderValue(doc.Header, 'VendorName'),
    currency: getHeaderValue(doc.Header, 'Currency'),
    bankAccountNumber: getHeaderValue(doc.Header, 'BankAccountNumber'),
    invoiceNumber: getDetailValue(doc.Detail, 'InvoiceNumber'),
    invoiceDate: getDetailValue(doc.Detail, 'InvoiceDate'),
    description: getDetailValue(doc.Detail, 'Description'),
    servicePrice: getDetailValue(doc.Detail, 'ServicePrice'),
    goodsPrice: getDetailValue(doc.Detail, 'GoodsPrice'),
  }));
}; 