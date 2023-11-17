import React from 'react';
import { DateIntervalOption, RangeOption, options } from './types';
import { ChevronLeft } from 'lucide-react';
import { Dayjs } from 'dayjs';
import DatePicker from 'react-datepicker';

const DatePickerModal = ({
  selectedOption,
  setSelectedOption,
  range,
  setRange,
}: {
  selectedOption: DateIntervalOption;
  setSelectedOption: React.Dispatch<React.SetStateAction<DateIntervalOption>>;
  range: RangeOption;
  setRange: React.Dispatch<React.SetStateAction<RangeOption>>;
}) => {
  const [startDate, setStartDate] = React.useState<Date | null | undefined>(
    range.startDate?.toDate()
  );
  const [endDate, setEndDate] = React.useState<Date | null | undefined>(
    range.endDate?.toDate()
  );
  const handleClick = (option: DateIntervalOption) => {
    setSelectedOption(option);
  };
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className='flex flex-col gap-2 '>
      {selectedOption.key === 'range' && (
        <div className='flex justify-center'>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
      )}

      <div className='flex flex-col gap-4 bg-gray-500 bg-opacity-5 rounded-sm p-4'>
        {options.map((option) => (
          <div
            key={option.key}
            onClick={() => handleClick(option)}
            className='flex flex-row bg-gray-500 bg-opacity-0 hover:bg-opacity-5 p-2 '
          >
            <p className='w-full'> {option.label}</p>
            <ChevronLeft
              className={`${selectedOption.key !== option.key ? 'hidden' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePickerModal;
