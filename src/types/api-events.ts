export type ApiEvents = {
  object: string;
  results: Result[];
  next_cursor: string;
  has_more: boolean;
};

type Result = {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
};

type Parent = {
  type: string;
  database_id: string;
};

type Properties = {
  speaker_link: Link;
  type: Type;
  subscription_link: Link;
  speaker_job: Location;
  date: PropertiesDate;
  published: Published;
  location: Location;
  speaker_name: Location;
  Name: Name;
};

type Name = {
  id: string;
  type: string;
  title: Title[];
};

type Title = {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
};

type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type Text = {
  content: string;
  link: null;
};

type PropertiesDate = {
  id: string;
  type: string;
  date: DateDate;
};

type DateDate = {
  start: Date;
  end: null;
};

type Location = {
  id: string;
  type: string;
  rich_text: Title[];
};

type Published = {
  id: string;
  type: string;
  checkbox: boolean;
};

type Link = {
  id: string;
  type: string;
  url: null | string;
};

type Type = {
  id: string;
  type: string;
  multi_select: MultiSelect[];
};

type MultiSelect = {
  id: string;
  name: string;
  color: string;
};
