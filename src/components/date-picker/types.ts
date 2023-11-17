import { Dayjs } from 'dayjs';

export interface DateIntervalOption {
  key: string;
  label: string;
  isFixedRange: boolean;
}
export interface RangeOption {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}
export const options: DateIntervalOption[] = [
  { key: 'day', label: 'Day', isFixedRange: true },
  { key: 'week', label: 'Week', isFixedRange: true },
  { key: 'month', label: 'Month', isFixedRange: true },
  { key: 'year', label: 'Year', isFixedRange: true },
  { key: 'last7days', label: 'Last 7 days', isFixedRange: false },
  { key: 'last30days', label: 'Last 30 days', isFixedRange: false },
  { key: 'last365days', label: 'Last 365 days', isFixedRange: false },
  { key: 'range', label: 'Range', isFixedRange: true },
];
