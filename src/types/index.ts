export type Country = {code: string; name: string; phone: string};

export type Gender = 'Male' | 'Female' | 'Other';

export type Notification = {
  _id: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
  updatedAt?: string;
};
