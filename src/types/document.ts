// ─────────────────────────────────────────────────────────────────────────────
// Document Types — shared across Purchase, Invoice, Quotation
// ─────────────────────────────────────────────────────────────────────────────

export type DocumentType = 'purchase' | 'invoice' | 'quotation';

export interface CompanyInfo {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  logo?: string;
  siret?: string;
  tva?: string;
}

export interface ClientInfo {
  name: string;
  address: string;
  city: string;
  phone?: string;
  email?: string;
}

export interface LineItem {
  id: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  tvaRate: number; // e.g. 20 for 20%
}

export interface DocumentData {
  type: DocumentType;
  reference: string;
  date: string;
  dueDate?: string;       // Invoice only
  validUntil?: string;     // Quotation only
  deliveryDate?: string;   // Purchase only
  company: CompanyInfo;
  client: ClientInfo;
  items: LineItem[];
  notes?: string;
  paymentTerms?: string;
  status: 'draft' | 'sent' | 'accepted' | 'paid' | 'overdue';
}

// ─────────────────────────────────────────────────────────────────────────────
// Calculation helpers
// ─────────────────────────────────────────────────────────────────────────────

export function calcLineTotal(item: LineItem): number {
  return item.quantity * item.unitPrice;
}

export function calcLineTva(item: LineItem): number {
  return calcLineTotal(item) * (item.tvaRate / 100);
}

export function calcSubtotal(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + calcLineTotal(item), 0);
}

export function calcTotalTva(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + calcLineTva(item), 0);
}

export function calcGrandTotal(items: LineItem[]): number {
  return calcSubtotal(items) + calcTotalTva(items);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// ─────────────────────────────────────────────────────────────────────────────
// Label map per document type (French)
// ─────────────────────────────────────────────────────────────────────────────

export const DOC_LABELS: Record<DocumentType, {
  title: string;
  refLabel: string;
  newTitle: string;
  listTitle: string;
  secondaryDateLabel?: string;
}> = {
  purchase: {
    title: 'Bon de Commande',
    refLabel: 'N° Commande',
    newTitle: 'Nouveau Bon de Commande',
    listTitle: 'Bons de Commande',
    secondaryDateLabel: 'Date de livraison',
  },
  invoice: {
    title: 'Facture',
    refLabel: 'N° Facture',
    newTitle: 'Nouvelle Facture',
    listTitle: 'Factures',
    secondaryDateLabel: "Date d'échéance",
  },
  quotation: {
    title: 'Devis',
    refLabel: 'N° Devis',
    newTitle: 'Nouveau Devis',
    listTitle: 'Devis',
    secondaryDateLabel: 'Valide jusqu\'au',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Status badges
// ─────────────────────────────────────────────────────────────────────────────

export const STATUS_CONFIG: Record<DocumentData['status'], {
  label: string;
  bg: string;
  text: string;
  dot: string;
}> = {
  draft:    { label: 'Brouillon', bg: 'bg-gray-100',    text: 'text-gray-600',    dot: 'bg-gray-400'   },
  sent:     { label: 'Envoyé',    bg: 'bg-blue-50',     text: 'text-blue-700',    dot: 'bg-blue-500'   },
  accepted: { label: 'Accepté',   bg: 'bg-emerald-50',  text: 'text-emerald-700', dot: 'bg-emerald-500'},
  paid:     { label: 'Payé',      bg: 'bg-emerald-50',  text: 'text-emerald-700', dot: 'bg-emerald-500'},
  overdue:  { label: 'En retard', bg: 'bg-red-50',      text: 'text-red-700',     dot: 'bg-red-500'   },
};

// ─────────────────────────────────────────────────────────────────────────────
// Default company info (MAGENOR)
// ─────────────────────────────────────────────────────────────────────────────

export const DEFAULT_COMPANY: CompanyInfo = {
  name: 'MAGENOR SARL',
  address: '12 Bis Rue de l\'Industrie',
  city: '91210 Draveil, France',
  phone: '+33 1 89 47 12 34',
  email: 'contact@magenor.fr',
  siret: '123 456 789 00012',
  tva: 'FR 12 345678901',
};

// ─────────────────────────────────────────────────────────────────────────────
// ID generation
// ─────────────────────────────────────────────────────────────────────────────

let counter = 0;
export function generateId(): string {
  counter += 1;
  return `item-${Date.now()}-${counter}`;
}

export function generateReference(type: DocumentType): string {
  const prefixes: Record<DocumentType, string> = {
    purchase: 'BC',
    invoice: 'FAC',
    quotation: 'DEV',
  };
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const num = String(Math.floor(Math.random() * 9000) + 1000);
  return `${prefixes[type]}-${year}${month}-${num}`;
}
