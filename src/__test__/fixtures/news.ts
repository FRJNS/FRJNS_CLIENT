import { type News } from "@/components/news/News";

export const MOCK_NEWS: News = {
  id: 1,
  startDate: "2020년 1월 1일",
  endDate: "2020년 1월 2일",
  detail: "디테일 디테일",
};

export const MOCK_SAME_DATE_NEWS: News = {
  id: 1,
  startDate: "2020년 1월 1일",
  endDate: "2020년 1월 1일",
  detail: "디테일 디테일",
};
