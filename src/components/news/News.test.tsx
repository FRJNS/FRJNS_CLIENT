import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import News from "./News";

import { MOCK_NEWS, MOCK_SAME_DATE_NEWS } from "@/__test__/fixtures/news";

describe("News", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render details", () => {
    render(
      <News
        id={MOCK_NEWS.id}
        startDate={MOCK_NEWS.startDate}
        endDate={MOCK_NEWS.endDate}
        detail={MOCK_NEWS.detail}
      />,
    );

    expect(screen.getByText(MOCK_NEWS.detail)).toBeTruthy();
  });

  it("should render startDate and endDate when does not equal", () => {
    render(
      <News
        id={MOCK_NEWS.id}
        startDate={MOCK_NEWS.startDate}
        endDate={MOCK_NEWS.endDate}
        detail={MOCK_NEWS.detail}
      />,
    );

    expect(screen.getByText(`${MOCK_NEWS.startDate} ~ ${MOCK_NEWS.endDate}`)).toBeTruthy();
  });

  it("should not render same date when startDate and endDate equal", () => {
    render(
      <News
        id={MOCK_SAME_DATE_NEWS.id}
        startDate={MOCK_SAME_DATE_NEWS.startDate}
        endDate={MOCK_SAME_DATE_NEWS.endDate}
        detail={MOCK_SAME_DATE_NEWS.detail}
      />,
    );

    expect(screen.queryByText(`${MOCK_NEWS.startDate} ~ ${MOCK_NEWS.endDate}`)).not.toBeTruthy();

    expect(screen.queryByText(MOCK_NEWS.startDate)).toBeTruthy();
  });
});
