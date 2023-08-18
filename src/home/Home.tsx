import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { REVIEWS } from '../reviews/models/constants';
import { LISTS } from '../lists/models/constants';
import { FEATURES } from '../features/models/constants';
import { List } from '../lists/models/types';
import { Review } from '../reviews/models/types';
import { Feature } from '../features/models/types';
import ReviewListItem from '../reviews/ui/ReviewListItem';
import ListListItem from '../lists/ui/ListListItem';
import FeatureListItem from '../features/ui/FeatureListItem';
import styled from 'styled-components';
import { MEDIA_SIZE } from '../common/constants';
import useResponsive from '../common/hooks/useResponsive';
import { useLocation, useNavigate } from 'react-router-dom';
import PageFooter from '../common/ui/PageFooter';
import { PODCASTS } from '../podcasts/models/constants';
import { PodcastSeason } from '../podcasts/models/types';
import PodcastSeasonListItem from '../podcasts/ui/PodcastSeasonListItem';

export const ALL_ARTICLES = [...REVIEWS, ...LISTS, ...FEATURES, ...PODCASTS].sort((a, b) => b.createdAt - a.createdAt);

const Header = styled.div`
  flex-shrink: 0;
  margin: 10px 10px calc(30vh - 100px);
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media ${MEDIA_SIZE.mobile} {
    flex-direction: column;
    width: fit-content;
  }
`;

const Filter = styled.div`
  user-select: none;
`;

const Select = styled.select`
  cursor: pointer;
`;

const Search = styled.input`
  @media ${MEDIA_SIZE.nonMobile} {
    min-width: 200px;
  }
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

function articleWaveFunc(period: number, contentWidth: number) {
  const sineFunc = (index: number) => 0.5 * Math.sin(index / period) + 0.5;

  return ({ index }: { index: number }) => `calc(${sineFunc(index)} * (100% - ${contentWidth}px))`;
}

const ArticleWrapper = styled.div<{ index: number }>`
  @media ${MEDIA_SIZE.mobile} {
    margin-left: ${articleWaveFunc(4, 232)};
  }

  @media ${MEDIA_SIZE.tablet} {
    display: flex;
    gap: 40px;
    margin-left: ${articleWaveFunc(6, 504)};
  }

  @media ${MEDIA_SIZE.desktop} {
    display: flex;
    gap: 60px;
    margin-left: ${articleWaveFunc(10, 816)};
  }
`;

const ArticlesContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  @media ${MEDIA_SIZE.mobile} {
    gap: 20px;
  }

  @media ${MEDIA_SIZE.tablet} {
    gap: 40px;
  }

  @media ${MEDIA_SIZE.desktop} {
    gap: 60px;
    max-width: 1200px;
  }
`;

const NoSearchResults = styled.div`
  line-height: 50vh;
  text-align: center;
`;

const articleToListItemContent = (article: Review | List | Feature | PodcastSeason): React.ReactElement | null => {
  if ('reviewId' in article) {
    return <ReviewListItem key={article['reviewId']} review={article} />;
  }

  if ('listItems' in article) {
    return <ListListItem key={article['id'] as string} list={article as List} />;
  }

  if ('episodes' in article) {
    return <PodcastSeasonListItem key={article['id']} season={article} />;
  }

  if ('id' in article) {
    return <FeatureListItem key={article['id'] as string} feature={article as Feature} />;
  }

  return null;
};

type ComponentProps = {
  category?: string;
};

export default function Home({ category }: ComponentProps): React.ReactElement {
  const navigate = useNavigate();
  const location = useLocation();

  const { isMobile, isDesktop } = useResponsive();

  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ block: 'center' });
      navigate(location.pathname, { replace: true });
    }
  }, [location.hash]);

  const [searchFocus, setSearchFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const formattedSearchValue = searchValue?.trim().toLowerCase();

  const categoryArticles = useMemo((): readonly (Review | List | Feature | PodcastSeason)[] => {
    if (!category) {
      return ALL_ARTICLES;
    }

    switch (category) {
      case 'reviews': {
        return REVIEWS;
      }
      case 'features': {
        return FEATURES;
      }
      case 'lists': {
        return LISTS;
      }
      case 'podcasts': {
        return PODCASTS;
      }
      default: {
        return ALL_ARTICLES;
      }
    }
  }, [category]);

  const filteredArticles = useMemo(() => {
    if (!formattedSearchValue || formattedSearchValue.length < 3) {
      return categoryArticles;
    }

    const match = (...values: (string | undefined | null)[]) =>
      values.some((value) => value?.toLowerCase().includes(formattedSearchValue));

    return categoryArticles.filter((article) => {
      if (match(article.title, article.author)) {
        return true;
      }

      if ('listId' in article) {
        const list = article as List;
        return match(list.description) || list.listItems.some((item) => match(item.artist, item.content, item.title));
      }

      if ('episodes' in article) {
        const podcast = article as PodcastSeason;
        return (
          match(podcast.author, podcast.description) ||
          podcast.episodes.some((episode) => match(episode.author, episode.description, episode.title))
        );
      }

      const nonList = article as Review | Feature;
      return match(nonList.artist, nonList.content);
    });
  }, [categoryArticles, formattedSearchValue]);

  const articlesGroupedByRow = useMemo(() => {
    if (isMobile) {
      return filteredArticles.map((article, index) => (
        <ArticleWrapper index={index} key={`1-${index}`}>
          {articleToListItemContent(article)}
        </ArticleWrapper>
      ));
    }

    const numCols = isDesktop ? 3 : 2;

    return filteredArticles.reduce((acc, _, index): React.ReactElement[] => {
      if (index % numCols === 0) {
        return [
          ...acc,
          <ArticleWrapper index={index} key={`${numCols}-${index}`}>
            {filteredArticles.slice(index, index + numCols).map(articleToListItemContent)}
          </ArticleWrapper>,
        ];
      }

      return acc;
    }, [] as React.ReactElement[]);
  }, [filteredArticles, isMobile, isDesktop]);

  const handleFilterSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'reviews': {
        navigate('/reviews');
        return;
      }
      case 'features': {
        navigate('/features');
        return;
      }
      case 'lists': {
        navigate('/lists');
        return;
      }
      case 'podcasts': {
        navigate('/podcasts');
        return;
      }
      default: {
        navigate('/');
        return;
      }
    }
  };

  const noResultsMessage = useMemo(() => {
    return noResultsMessages[Math.floor(Math.random() * noResultsMessages.length - 1)];
  }, [filteredArticles.length === 0]);

  return (
    <ScrollContainer id="home-scroll-container">
      <Header>
        <Filter>
          show me{' '}
          <Select value={category ?? 'all'} onChange={handleFilterSelect}>
            <option value="all" label="❤ everything"></option>
            <option value="features" label="✦ features"></option>
            <option value="reviews" label="✎ reviews"></option>
            <option value="lists" label="☰ lists"></option>
            <option value="podcasts" label="♪ podcasts"></option>
          </Select>
        </Filter>
        <Search
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={searchFocus ? '⦿⦿ search' : '⊖⊖ search'}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />
      </Header>
      <ArticlesContainer>{articlesGroupedByRow}</ArticlesContainer>
      {filteredArticles.length === 0 && <NoSearchResults>{noResultsMessage}</NoSearchResults>}
      {filteredArticles.length !== 0 && <PageFooter></PageFooter>}
    </ScrollContainer>
  );
}

const noResultsMessages = [
  'uhhh nah',
  'uhhh nah',
  'uhh nah',
  'uhh nah',
  'sorry bud',
  'not in stock',
  'outta luck',
  'outta luck',
  'outta luck',
  'hmmm no results',
  'hmm no results',
  'hm no results',
  'no results',
  'no results',
  'no results',
  'no results',
  'hm nope nothing',
  'hm nothing here',
  'hm nothing here',
  'nothing here',
  'nothing here',
  'nothing here',
  'nothing here',
  'absolutely no results',
  'absolutely no results',
  'unlucky',
  'not found',
  'oof nah',
  'hm nothing',
  'hmm nothing',
  'hmm nothing',
  'hmm nothing',
  'hmmm nothing',
  'hmmm nothing',
  'hmmmm nothing',
  "don't recognize that one",
  "sorry couldn't find that",
  "sorry couldn't find that",
  "sorry couldn't find that",
  "sorry couldn't find that",
  'hm nothing found',
  'nothing found',
  'nothing found',
  'nothing found',
  'nothing found',
  'hm sorry nothing found',
  'hmm sorry nothing found',
  'sorry nothing found',
  'sorry nothing found',
  'sorry nothing found',
  'hm no matches',
  'hmm no matches',
  'hmm no matches',
  'no matches',
  'no matches',
  'no matches',
  'no matches',
  'no matches',
  'hm sorry no matches',
  'hmm sorry no matches',
  'sorry no matches',
  'sorry no matches',
  'absolutely no matches',
  'absolutely NO matches',
];
