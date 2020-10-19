export interface Event {
  title?: string;
  i18nTitle?: string;
  location: string;
  duration: {
    start: Date;
    end?: Date;
    stillAt?: true;
    dateFormat?: string;
  };
}
