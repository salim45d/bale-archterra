import contentfulClient from "@/contentful/contentfulClients";
import {
  TypeAboutSkeleton,
  TypeServiceSkeleton,
} from "@/contentful/types/service.type";
import axios from "axios";

export const getAboutContentfulPage = async (id: string) => {
  try {
    const data = await contentfulClient.getEntry<TypeAboutSkeleton>(id);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getServiceContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeServiceSkeleton>({
      content_type: "service",
    });

    return data.items;
  } catch (err) {
    console.log(err);
  }
};

export const getServiceContentfulbySlug = async (slug: string) => {
  try {
    const data = await contentfulClient.getEntries<TypeServiceSkeleton>({
      content_type: "service",
      "fields.slug[match]": slug,
    });
    return data.items[0];
  } catch (err) {
    console.log(err);
  }
};

export const getTeam = async () => {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL || ""
    );
    return data;
  } catch (error) {
    const messageError = (error as Error).message;
  }
};
