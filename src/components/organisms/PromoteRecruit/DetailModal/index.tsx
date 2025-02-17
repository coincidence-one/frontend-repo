import React, { useEffect, useState } from 'react';
import * as S from './index.styles';

import { CommentForm, Hashtags, Modal } from '@/components/blocks';
import { BACKEND_API_URL } from '@/common/url';
import { SideBar } from './SideBar';

interface IDetail {
  id: string;
  title: string;
  description: string;
  deadline: string;
  member: number;
  positions: string[];
  skills: string[];
  contactInfo: string;
  likes: number;
  comments: string[];
}

export function DetailModal() {
  const [detail, setDetail] = useState<IDetail>({
    id: '',
    title: '',
    description: '',
    deadline: '',
    member: 0,
    positions: [],
    skills: [],
    contactInfo: '',
    likes: 0,
    comments: [],
  });
  useEffect(() => {
    fetch(`${BACKEND_API_URL}/recruits/:id`)
      .then((res) => res.json())
      .then((res) => setDetail(res));
  }, []);

  return (
    <Modal isOpen={true} modalCloseHandler={() => null}>
      <S.Wrapper>
        <S.SubWrapper>
          <S.Title>{detail.title}</S.Title>
          <S.Description>{detail.description}</S.Description>
          <S.RecruitInfoCard>
            <S.CardItem>
              <S.ItemLabel>마감일</S.ItemLabel>
              <S.ItemValue>{detail.deadline}</S.ItemValue>
            </S.CardItem>
            <S.CardItem>
              <S.ItemLabel>모집인원</S.ItemLabel>
              <S.ItemValue>{detail.member}</S.ItemValue>
            </S.CardItem>
            <S.CardItem>
              <S.ItemLabel>모집 포지션</S.ItemLabel>
              <S.ItemValue>
                <Hashtags hashtags={detail.positions} />
              </S.ItemValue>
            </S.CardItem>
            <S.CardItem>
              <S.ItemLabel>사용 예정 기술</S.ItemLabel>
              <S.ItemValue>
                <Hashtags hashtags={detail.skills} />
              </S.ItemValue>
            </S.CardItem>
          </S.RecruitInfoCard>
          <CommentForm comments={detail.comments} addComment={() => null} />
        </S.SubWrapper>
        <SideBar contact={detail.contactInfo} likes={detail.likes} />
      </S.Wrapper>
    </Modal>
  );
}
