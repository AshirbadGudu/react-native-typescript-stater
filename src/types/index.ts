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

export type FAQ = {
  _id: string;
  answer: string;
  createdAt: string;
  question: string;
  updatedAt: string;
};
