import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeAboutFields {
  title: EntryFieldTypes.Symbol;
  subtitle?: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  opening?: EntryFieldTypes.RichText;
  body?: EntryFieldTypes.RichText;
  closing?: EntryFieldTypes.RichText;
}

export interface TypeServiceFields {
  tittle: EntryFieldTypes.Symbol;
  subtitle: EntryFieldTypes.Symbol;
  cardText: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  opening?: EntryFieldTypes.RichText;
  body?: EntryFieldTypes.RichText;
  price?: EntryFieldTypes.Integer;
  imageCard?: EntryFieldTypes.AssetLink;
  image1?: EntryFieldTypes.AssetLink;
  image2?: EntryFieldTypes.AssetLink;
  image3?: EntryFieldTypes.AssetLink;
  image4?: EntryFieldTypes.AssetLink;
}

export interface IAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeServiceSkeleton = EntrySkeletonType<
  TypeServiceFields,
  "service"
>;
export type TypeAboutSkeleton = EntrySkeletonType<TypeAboutFields, "about">;
export type TypeAbout<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeAboutSkeleton, Modifiers, Locales>;
