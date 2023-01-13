export type ApiEvents = {
  object: string;
  results: Result[];
  next_cursor: string;
  has_more: boolean;
};

interface Result {
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
}

interface Parent {
  type: string;
  database_id: string;
}

export type Properties = {
  apply_link: ApplyLinkClass;
  date: PropertiesDate;
  speaker_link: ApplyLinkClass;
  types: Types;
  language: Language;
  youtube_link: ApplyLinkClass;
  location: Location;
  speaker_name: Location;
  subscription_link: ApplyLinkClass;
  speaker_job: Location;
  published: Published;
  Name: Name;
};

interface Name {
  id: string;
  type: string;
  title: Title[];
}

interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null | string;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text {
  content: string;
  link: Link | null;
}

interface Link {
  url: string;
}

interface ApplyLinkClass {
  id: string;
  type: string;
  url: null | string;
}

interface PropertiesDate {
  id: string;
  type: string;
  date: DateDate;
}

interface DateDate {
  start: Date;
  end: null;
  time_zone: null;
}

interface Language {
  id: string;
  type: string;
  select: Select | null;
}

interface Select {
  id: string;
  name: string;
  color: string;
}

interface Location {
  id: string;
  type: string;
  rich_text: Title[];
}

interface Published {
  id: string;
  type: string;
  checkbox: boolean;
}

interface Types {
  id: string;
  type: string;
  multi_select: Select[];
}
