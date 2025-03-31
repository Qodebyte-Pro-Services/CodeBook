// types.ts
export interface SchoolEvent {
    id: string;
    title: string;
    date: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    description?: string;
    type: 'holiday' | 'exam' | 'test' | 'break' | 'other';
    schoolType: 'primary' | 'secondary' | 'nursery';
  }