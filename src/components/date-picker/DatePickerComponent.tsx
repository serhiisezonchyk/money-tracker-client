import React from 'react';
import DatePickerModal from './DatePickerModal';
import CustomModal from '../modal/CustomModal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DateIntervalOption, RangeOption } from './types';
import dayjs, { Dayjs } from 'dayjs';

const DatePickerComponent = () => {
  const [selectedOption, setSelectedOption] =
    React.useState<DateIntervalOption>({
      key: 'day',
      label: 'Day',
      isFixedRange: false,
    });
  const [range, setRange] = React.useState<RangeOption>({
    startDate: dayjs(),
    endDate: null,
  });
  const [dateLabel, setDateLabel] = React.useState<string>('');
  React.useEffect(() => {
    setDateLabel(
      `${range.startDate ? dayjs(range.startDate).format('MMM D, YYYY') : ''} ${
        range.endDate ? `-${dayjs(range.startDate).format('MMM D, YYYY')}` : ''
      }`
    );
  }, [range]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <>
      <div className='flex justify-center'>
        <div
          className={`flex flex-row rounded-xl w-[95%] self-center border-border border-2 p-2 m-2 md:m-0 md:w-2/3 text-center items-center ${
            selectedOption.isFixedRange ? 'justify-between' : 'justify-center'
          }`}
        >
          <ArrowLeft
            className={`w-[30px] ${
              selectedOption.isFixedRange ? '' : 'hidden'
            }`}
          />
          <p className={`w-full`} onClick={() => setIsOpen((prev) => !prev)}>
            {dateLabel}
          </p>
          <ArrowRight
            className={`w-[30px] ${
              selectedOption.isFixedRange ? '' : 'hidden'
            }`}
          />
        </div>
      </div>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DatePickerModal
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          range={range}
          setRange={setRange}
        />
      </CustomModal>
    </>
  );
};

export default DatePickerComponent;
