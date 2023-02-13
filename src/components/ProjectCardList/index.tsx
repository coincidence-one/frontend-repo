import React, { useEffect, useRef, useState } from 'react';

import { BACKEND_API_URL } from '@/common/url';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingDots } from '../LoadingDots';
import { Carousel } from './Carousel';

import { ReactComponent as SearchBarIcon } from '@/assets/search-icon.svg';
import { ReactComponent as ViewsIcon } from '@/assets/views-icon.svg';
import { ReactComponent as LikesIcon } from '@/assets/likes-icon.svg';

interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectHashtags: string[];
  projectImages: string[];
  views: number;
  likes: number;
}

interface IParams {
  type: string;
  search: string;
  page: number;
}

export function ProjectCardList() {
  const navigate = useNavigate();

  const [params, setParams] = useState<IParams>({ type: 'latest', search: '', page: 1 });

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(
      'projectList',
      ({ pageParam = 1 }) =>
        fetch(
          `${BACKEND_API_URL}/projects?type=${params.type}&search=${params.search}&page=${pageParam}`,
        )
          .then((res) => res.json())
          .then((res) => {
            const { data, isLastPage } = res;
            return { data, nextPage: pageParam + 1, isLastPage };
          }),
      {
        getNextPageParam: (lastPage) => {
          return !lastPage.isLastPage ? lastPage.nextPage : undefined;
        },
      },
    );

  const target = useRef(null);

  useEffect(() => {
    const options = {
      threshold: [0, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    }, options);

    if (target.current !== null) {
      observer.observe(target.current);
    }
  }, []);

  return (
    <ProjectCardListWrapper>
      <NavigationBarWrapper>
        <NavigationBar>
          <NavigationItemWrapper>
            <NavigationItem onClick={() => setParams((prev) => ({ ...prev, type: 'latest' }))}>
              최신순
            </NavigationItem>
          </NavigationItemWrapper>
          <NavigationItemWrapper>
            <NavigationItem onClick={() => setParams((prev) => ({ ...prev, type: 'views' }))}>
              조회수순
            </NavigationItem>
          </NavigationItemWrapper>
          <NavigationItemWrapper>
            <NavigationItem onClick={() => setParams((prev) => ({ ...prev, type: 'like' }))}>
              좋아요순
            </NavigationItem>
          </NavigationItemWrapper>
        </NavigationBar>
        <SearchBarWrapper>
          <SearchBarIcon />
          <SearchBar
            placeholder="어떤 프로젝트 찾으시나요?"
            onChange={(event) => setParams((prev) => ({ ...prev, search: event.target.value }))}
          />
        </SearchBarWrapper>
      </NavigationBarWrapper>

      <CardListWrapper>
        {data?.pages.map((group) =>
          group.data.map((item: IProject, index: number) => {
            return (
              <CardWrapper key={index + 1}>
                <Carousel projectImages={item.projectImages} />
                <ProjectInfoWrapper onClick={() => navigate(`/project/detail/${index + 1}`)}>
                  <ViewsAndLikesWrapper>
                    <Views>
                      <ViewsIcon style={{ objectFit: 'cover' }} />
                      {item.views}
                    </Views>
                    <div style={{ border: '1px solid #BCBCBC', width: 0, height: '100%' }}></div>
                    <Likes>
                      <LikesIcon style={{ objectFit: 'cover' }} />
                      {item.likes}
                    </Likes>
                  </ViewsAndLikesWrapper>
                  <ProjectTitle>{item.projectTitle}</ProjectTitle>
                  <ProjectDescription>{item.projectDescription}</ProjectDescription>
                  <ProjectHashtagsWrapper>
                    {item.projectHashtags.map((item, index) => {
                      if (index < 3) return <Hashtag key={index}>{item}</Hashtag>;
                    })}
                    {item.projectHashtags.length > 3 && (
                      <Hashtag>{`+ ${item.projectHashtags.length - 3}`}</Hashtag>
                    )}
                  </ProjectHashtagsWrapper>
                </ProjectInfoWrapper>
              </CardWrapper>
            );
          }),
        )}
      </CardListWrapper>

      <LoadingCatcher ref={target}>
        {isFetchingNextPage || status === 'loading' ? <LoadingDots /> : null}
        {!isFetching && !hasNextPage ? (
          <NoMoreProject>공유하고 싶은 프로젝트를 업로드 해주세요!</NoMoreProject>
        ) : null}
      </LoadingCatcher>
    </ProjectCardListWrapper>
  );
}

const ProjectCardListWrapper = styled.article`
  padding: 30px;

  max-width: 90vw;
`;

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  padding: 30px;

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 500px;

  border: 1px solid #bcbcbc;
  border-radius: 24px;

  box-shadow: 5px 10px 10px rgb(0 0 0 / 20%);

  cursor: pointer;
`;

const ProjectInfoWrapper = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 50%;
`;

const ProjectTitle = styled.h1`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-large);
  color: var(--mainpage-cardlist-title-text-color);
`;

const ProjectDescription = styled.p`
  font-weight: var(--base-text-weight-normal);
  font-size: var(--base-text-size-medium);

  overflow: scroll;
`;

const ProjectHashtagsWrapper = styled.div`
  display: flex;
  gap: 8px;

  flex-wrap: wrap;

  /* overflow: hidden; */
`;

const Hashtag = styled.div`
  background-color: #bcbcbc;

  padding: 4px 12px 4px 12px;

  border-radius: 12px;

  font-size: var(--base-text-size-normal);
  color: var(--mainpage-cardlist-hashtag-text-color);
  background-color: var(--mainpage-cardlist-hashtag-background-color);
`;

const LoadingCatcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
`;

const NoMoreProject = styled.div``;

const NavigationBarWrapper = styled.div`
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
  }
`;

const NavigationBar = styled.nav`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 900px) {
    gap: 10px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
  }
`;

const NavigationItemWrapper = styled.div`
  cursor: pointer;
`;

const NavigationItem = styled.div`
  color: var(--mainpage-navigation-bar-item-text-color);

  background-color: var(--mainpage-navigation-bar-item-background-color);

  border-radius: 8px;

  padding: 10px 20px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 16px;

  min-width: 300px;

  background-color: var(--mainpage-searchbar-background-color);

  border-radius: 10px;
`;
const SearchBar = styled.input`
  all: unset;

  width: 100%;

  color: var(--mainpage-searchbar-text-color);

  ::placeholder {
    color: var(--mainpage-searchbar-placeholder-text-color);
  }
`;

const ViewsAndLikesWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const Views = styled.div`
  display: flex;
  align-items: center;

  color: var(--mainpge-cardlist-views-text-color);
`;

const Likes = styled.div`
  display: flex;
  align-items: center;

  color: var(--mainpge-cardlist-likes-text-color);
`;
