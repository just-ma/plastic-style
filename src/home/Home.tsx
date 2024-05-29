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
  flex: 0 0 calc(30vh - 100px);
  margin: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media ${MEDIA_SIZE.mobile} {
    flex-direction: column;
    width: fit-content;
    justify-content: flex-start;
  }
`;

const Filter = styled.div`
  font-size: 14px;
  user-select: none;
`;

const Select = styled.select`
  font-size: 14px;
  cursor: pointer;
  font-family: 'Sligoil-Micro';
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;

  @media ${MEDIA_SIZE.mobile} {
    align-items: flex-start;
  }
`;

const Search = styled.input`
  font-size: 16px;
  font-family: 'Sligoil-Micro';

  @media ${MEDIA_SIZE.nonMobile} {
    font-size: 14px;
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

const SearchMessage = styled.div`
  white-space: pre;
  font-size: 12px;
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
  const [searchResultIndex, setSearchResultIndex] = useState(0);
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

  useEffect(() => {
    if (filteredArticles.length === 0) {
      setSearchResultIndex((prev) => (prev + 1) % noResultsMessages.length);
    }
  }, [filteredArticles.length === 0]);

  const searchMessage = useMemo(() => {
    if (formattedSearchValue.length < 3) {
      return null;
    }

    if (filteredArticles.length === 0) {
      return noResultsMessages[searchResultIndex];
    }

    return `${filteredArticles.length} results`;
  }, [filteredArticles.length, formattedSearchValue]);

  return (
    <ScrollContainer id="home-scroll-container">
      <Header>
        <Filter>
          show me{' '}
          <Select value={category ?? 'all'} onChange={handleFilterSelect}>
            <option value="all">{'❤︎ everything'}</option>
            <option value="features">{'✦ features'}</option>
            <option value="reviews">{'✎ reviews'}</option>
            <option value="lists">{'☰ lists'}</option>
            <option value="podcasts">{'♪ podcasts'}</option>
          </Select>
        </Filter>
        <SearchContainer>
          <Search
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchFocus ? '•ᴥ• search' : '-ᴥ- search'}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          {searchMessage && <SearchMessage>{searchMessage}</SearchMessage>}
        </SearchContainer>
      </Header>
      <ArticlesContainer>{articlesGroupedByRow}</ArticlesContainer>
      {filteredArticles.length !== 0 && <PageFooter></PageFooter>}
    </ScrollContainer>
  );
}

const noResultsMessages = [
  'no results',
  'still no results',
  "nothing found:'(",
  'outta luck',
  'no results',
  'no results',
  'absolutely no results',
  'still no results',
  "nothing found:'(",
  'outta luck',
  'no results',
  'no results',
  'no results',
  'no results',
  'no results',
  'no results',
  'no results',
  `┤├┤├┤├┤├░├░├┤├┤├├├▒████▓√├┤├├├┤├░├┤├┤├┤├
├├├┤├┤├┤├√├√├┤├┤▓█████████▒┤├√├├├├├┤├├├├
┤├┤├┤├┤├├├├├├├███▓▒├├├┤╫▓███▒├┤├┤├┤├┤├├├
├┤├├├┤├┤├┤├√▒██▓├┤├┤├┤├┤├├▒██▓├┤├├├√├┤├┤
░├├├┤├┤├┤├┤▓██┤├√┤░░░░╫░░░┤├▓██├┤├┤├├├┤├
├√├┤├√├├├├▓█▓├├░░╫░░░╫░╫░╫░░├▒██├√├┤├├├┤
┤├├├┤├├├√▒█▓├├░░╫░░░╫░░░╫╫╫╫╫├╫██├┤├√├√├
├┤├┤├├├┤├█▓├√░░░░░░░░╫░╫╫╫╫╫╫╫├▒█▓├┤├√├├
┤├┤├├├√├██┤├░░╫░░░░░░░░░╫╫╫╫╫╫╫├▓█╫├√├√├
├┤├┤├┤├▓█░├╫░╫░░░░░░░░░░░╫╫╫╫╫╫╫├██├├├├├
┤├┤├├├√█▓├╫╫╫░╫░░░░░░░░░╫░╫╫╫╫▒╫╫░█▓┤├┤├
├┤├├├┤██├░╫╫░╫░░░░┤░┤░░░░╫╫╫╫╫╫▒╫░▓█├┤├√
░├√├√├█▒√╫╫╫╫░░░░┤░┤░░░░╫░╫╫╫╫╫╫▒╫░█▓├┤├
├├├√├██├░╫╫╫░╫░░░░√┤┤░░░░╫╫╫╫╫╫▒╫▒░▓█┤├┤
┤├√├┤█▒├╫╫╫░╫░░░░├┤├░░░░░░╫░╫╫╫╫▒▒╫░█▓├├
├├├┤▒█├╫╫╫░╫░░░░░░├├├░░░░░░√├░╫╫╫▒╫░▓█├┤
░├┤├█▓├╫╫╫░├┤├┤├┤├√├┤┤░░░├├╫▒╫├░▒▒▒╫╫█░├
├├├├█▒░╫╫╫├░▓▓▒√├├├┤┤░░░├√█████┤░▒▒▒√█▓┤
┤├┤▒█├╫╫╫├▒█████├├┤├░┤░├┤██▓╫▓██┤╫▒╫░▓█├
├√├██┤╫╫├╫██├├▒██┤├░┤░┤├▒█├┤├√░█▓░╫▒╫▒█├
┤├√█▓░╫╫┤██├├├┤├█▒┤├░░├├█▓├├┤├┤▓█┤╫╫▒░█├
├┤├█╫╫╫░╫█├├├▒├┤▓█├┤░░├╫█√├▓█▓├├█▒╫▒╫░█▒
┤├▒█░╫╫├▓█┤├▓██├√█┤├░░├▓█├╫▓▓█▒├█▓╫╫▒░▓▓
├├▓█┤╫╫├█▓├▒▓▓█╫├█╫√░░├█▓├▓▓██▓┤▓█░▒╫░▒█
├├██░╫╫├█▒├▓▓██▓√█▒├░░┤█▓├▓▓███├▓█░╫▒╫▒█
├├█▓░▒╫√█╫├▓▓██▓├█▓├░░├█▓┤▓████├▓█░▒▒╫░█
├├█▓╫▒╫├█▒├████▒┤█▒├░░├▓█├▓███▓├█▓░╫▒╫░█
├├█▒░▒╫├█▓├▓███√├█╫┤░░├▒█┤├███├├█▒╫▒▒▒├█
├├█▒╫▒▒░▓█┤├██▓├╫█√░╫╫░├█▒┤├▒├├▒█░╫▒▒╫░█
├┤█▒╫▒▒╫░█░┤├√├├██├░╫╫░├▓█├√├├├█▓░╫▒▒▒┤█
├├█▒╫▒▒╫├██├├├┤▒█░√╫╫╫╫░┤██├├├██░╫▒▒▒╫░▓
├├█▒╫▒▒╫├├██▒░▓█▓√░╫╫╫╫╫├╫█████▒░▒▒▒▒▒┤█
┤├█▒╫╫╫╫█▓┤████▓┤░╫╫╫╫╫╫╫├░▓█▓╫░▒▒▒▒▒╫░█
├┤█▒░╫┤███░██▓├├░╫╫╫╫▒╫╫╫╫░░├░╫▒▒▒▒▒▒▒√█
┤├█▒├├▒█√▓██▓█┤░╫╫╫╫▒╫▒╫▒╫▒╫▒╫▒▒▒▒▒▒▒╫░█
├├█▒╫██▓├▒█┤├█▓░╫▒╫▒╫▒╫▒▒▒▒▒▒▒▒▒▒▒▒▒▒╫░█
┤├█▒███▒√╫█├├▓█√╫╫▒╫▒╫▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╫░█
├┤▓██┤█▓├├█░├▓█░╫▒▒▒╫▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╫╫█
├├▒█▓├█▓┤├█░√▓█┤▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒█
├├▒█╫┤██├┤█▒├▓█░╫▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╫░▓▓
┤▓██▒├▓█┤├█▒┤▓█░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╫╫▒▒▒▒┤█▓
▒█▒█▒√▓█├┤█▓├▓█░╫▒▒▒▒▒▒▒▒▒▒▒▒▒╫▒▓╫▒▒╫░█░
█▓┤█▓├▓█√├█▓┤▓█┤▒▒▒▒▒▒▒▒▒▒▒▒▒╫░▓█░╫▒╫╫█├
█▒├▓█√▒█├┤█▓├▓█├╫╫╫╫╫▒▒▒▒▒▒▒╫░░█▓░╫▒░▓█┤
█▒┤▓█├▒█┤├█▓┤▒█├░▒▒░╫╫▒▒▒▒▒╫╫├██░╫▒╫░█▓├
█▒├▓█√▒█├├█▓├▒█▒████░╫▒▒▒▒╫░├██▒░▒▒╫░█╫├
█▒┤▓█├╫█├├██┤╫███▒▓█▓┤╫╫╫┤√▒██▒┤╫╫▒░▓█┤├
█▒├▓█┤├╫├├▒▒├▒█▓├√├▓█┤├┤╫▓███▒┤╫╫▒╫┤█▓├├
█▓├▓█├┤├┤├┤├├▒█├┤├┤▒█▓█████▓░░▒▒▒▒░▒█├┤├
█▓├▓█┤├√├├├┤├√├├├┤├█████▓▒┤░╫▒▒▒▒╫├██┤├┤
▓█├├┤├┤├┤├√├├├┤├├▒██▒√░├┤░╫╫▒▒▒▒▒░▒█┤├┤├
▒█├├├┤├├├├├├├┤├√▒██╫░╫╫╫╫▒▒▒▒▒▒▒╫┤██├√├├
░█┤├┤├├├├├√├┤├├├█▓√░▒╫▒▒▒▒▒▒▒▒▒╫┤▓█├├├├├
├█░├├┤├├├┤├├├├├██√╫▒▒▒▒▒▒▒▒▒▒▒╫░▒█▒├├┤├┤
┤█▒├┤├√├├├├├├├├█▒░▒▒▒▒▒▒▒▒▒▒▒╫░░██┤├┤├┤├
├▓█┤├┤├├├┤├├├┤├█╫╫▒▒▒▒▒▒▒▒▒▒╫░░██√├┤├┤├┤
√▒█├├├┤├┤├├├┤├╫█░╫▒▒▒▒▒▒▒▒▒╫░░██┤├├├├├┤├
├┤█√├┤├┤├┤├√├├▒█├╫▒▒▒▒▒▒╫╫░┤▒██┤├┤├┤├├├┤
├├█▒┤├√├┤├┤├┤├▒█┤├╫╫╫╫╫╫░├░▓██├├┤├┤├┤├┤├
├┤▓█├√├┤├├├├├┤▒██▓╫░├√├░▒███▓├├┤├├├√├├├┤
├├░█├├┤├├├┤├├├▓████████████├├├√├┤├√├┤├├├
├┤├█▓┤├├├┤├┤├┤█▒├╫▓█████▒┤├√├┤├┤├√├├├┤├┤
┤├├▓█├┤├┤├┤├├╫█├√├┤├┤├├├├├┤├√├┤├√├├├├├√├
├├├┤██▒╫├┤░▒███┤├┤├┤├√├├├├├┤├√├┤├┤├√├├├┤
░├┤├├████████▒├├┤├┤├├├┤├┤├├├├├┤├┤├┤├┤├┤├`,
];
