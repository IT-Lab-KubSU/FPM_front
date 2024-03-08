"use client";
import { ReactElement } from "react";
import { Slider } from "@/features";
import { ContainerLayout } from "@/entities/layouts/ContainerLayout";
import { gql, useQuery } from "@apollo/client";
import { SubtitleLayout } from "@/entities";
import { NewCard } from "@/widgets/News/NewCard";
import { GetNewsQuery } from "@/__generated__/graphql";

const newsQuery = gql`
  query GetNews($locale: I18NLocaleCode!) {
    news(locale: $locale) {
      data {
        id
        attributes {
          label
          text
          active
          createdAt
          coverUrl {
            data {
              attributes {
                previewUrl
                url
                height
                width
                mime
              }
            }
          }
        }
      }
    }
  }
`;

export const News = (): ReactElement => {
  const { loading, error, data } = useQuery<GetNewsQuery>(newsQuery, {
    variables: {
      locale: "ru",
    },
  });

  return (
    <SubtitleLayout text={"Новости"}>
      <ContainerLayout>
        {!loading && data?.news && (
          <Slider>
            {data.news.data.map((item) => {
              if (!item.attributes) return;
              return (
                <NewCard
                  title={item.attributes.label}
                  text={item.attributes.text}
                  image={item.attributes?.coverUrl?.data?.attributes?.url ?? ""}
                  date={item.attributes?.createdAt}
                  key={item.id}
                />
              );
            })}
          </Slider>
        )}
      </ContainerLayout>
    </SubtitleLayout>
  );
};
