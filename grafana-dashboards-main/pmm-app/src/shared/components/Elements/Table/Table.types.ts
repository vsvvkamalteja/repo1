import { ChangeEvent, ReactNode } from 'react';
import { Column } from 'react-table';

export interface SelectedTableRows<T> {
  id: string;
  original: T;
}

export interface TableProps {
  className?: string;
  rowSelection?: boolean;
  onRowSelection?: (selected: any) => void;
  columns: Column[];
  data: object[];
  noData?: ReactNode;
  loading?: boolean;
  rowKey?: (rec: any) => any;
}

export interface TableCheckboxProps {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  style: any;
  title: string;
}
