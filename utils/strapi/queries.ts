import { ALERT } from "@/utils/strapi/sections/Alert";
import { BANNER } from "@/utils/strapi/sections/Banner";
import { BLOG_POSTS_PODCAST } from "@/utils/strapi/sections/BlogPostsPodcast";
import { CARD_LIST } from "@/utils/strapi/sections/CardList";
import { CONTACT_TARGET_LIST } from "@/utils/strapi/sections/ContactTargetList";
import { FAQ_SECTION } from "@/utils/strapi/sections/FAQ";
import { FORM_VIDEO } from "@/utils/strapi/sections/FormVideo";
import { HERO_SLIDER } from "@/utils/strapi/sections/HeroSlider";
import { LEADERBOARD } from "@/utils/strapi/sections/Leaderboard";
import { LINK_LIST } from "@/utils/strapi/sections/LinkList";
import { LIST_CONFIG } from "@/utils/strapi/sections/Listconfig";
import { OVERLAY_CARD_LIST } from "@/utils/strapi/sections/OverlayCardList";
import { PODCAST_LIST } from "@/utils/strapi/sections/PodcastList";
import { PROMO_LINK_LIST } from "@/utils/strapi/sections/PromoLinkList";
import { RICH_TEXT_IMAGE } from "@/utils/strapi/sections/RichTextImage";
import { STATISTICS_CARD_LIST } from "@/utils/strapi/sections/StatisticsCardList";
import { TEXT_CONTENT } from "@/utils/strapi/sections/TextContent";
import type { AlertSection } from "@/utils/strapi/sections/Alert";
import type { BannerSection } from "@/utils/strapi/sections/Banner";
import type { BlogPostsPodcastSection } from "@/utils/strapi/sections/BlogPostsPodcast";
import type { CardListSection } from "@/utils/strapi/sections/CardList";
import type { ContactTargetListSection } from "@/utils/strapi/sections/ContactTargetList";
import type { FAQSection } from "@/utils/strapi/sections/FAQ";
import type { FormVideoSection } from "@/utils/strapi/sections/FormVideo";
import type { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider";
import type { LeaderboardSection } from "@/utils/strapi/sections/Leaderboard";
import type { LinkListSection } from "@/utils/strapi/sections/LinkList";
import type { ListconfigSection } from "@/utils/strapi/sections/Listconfig";
import type { OverlayCardListSection } from "@/utils/strapi/sections/OverlayCardList";
import type { PodcastListSection } from "@/utils/strapi/sections/PodcastList";
import type { PromoLinkListSection } from "@/utils/strapi/sections/PromoLinkList";
import type { RichTextImageSection } from "@/utils/strapi/sections/RichTextImage";
import type { StatisticsCardListSection } from "@/utils/strapi/sections/StatisticsCardList";
import type { TextContentSection } from "@/utils/strapi/sections/TextContent";

export type ComponentSection =
  | AlertSection
  | BannerSection
  | BlogPostsPodcastSection
  | CardListSection
  | ContactTargetListSection
  | FAQSection
  | FormVideoSection
  | HeroSliderSection
  | LeaderboardSection
  | LinkListSection
  | ListconfigSection
  | OverlayCardListSection
  | PodcastListSection
  | PromoLinkListSection
  | RichTextImageSection
  | StatisticsCardListSection
  | TextContentSection

export const SECTIONS = `
  ${ALERT}
  ${BANNER}
  ${BLOG_POSTS_PODCAST}
  ${CARD_LIST} 
  ${CONTACT_TARGET_LIST}
  ${FAQ_SECTION}
  ${FORM_VIDEO}
  ${HERO_SLIDER}
  ${LINK_LIST}
  ${LIST_CONFIG}
  ${LEADERBOARD}
  ${OVERLAY_CARD_LIST}
  ${PODCAST_LIST}
  ${PROMO_LINK_LIST}
  ${RICH_TEXT_IMAGE}
  ${STATISTICS_CARD_LIST}
  ${TEXT_CONTENT}
`;