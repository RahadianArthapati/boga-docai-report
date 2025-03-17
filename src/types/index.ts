export interface Value {
  original: string;
  modified: string;
}

export interface HeaderItem {
  name: string;
  value: Value;
}

export interface DetailData {
  name: string;
  value: Value;
}

export interface DetailItem {
  Sequence: number;
  Data: DetailData[];
}

export interface Document {
  TransactionID: string;
  DocumentName: string;
  Header: HeaderItem[];
  Detail: DetailItem[];
}

export interface DocumentTableRow {
  transactionId: string;
  document: string;
  date: string;
  companyId: Value;
  brandId: Value;
  outletId: Value;
  vendorName: Value;
  currency: Value;
  bankAccountNumber: Value;
  invoiceNumber: Value;
  invoiceDate: Value;
  description: Value;
  servicePrice: Value;
  goodsPrice: Value;
} 