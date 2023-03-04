import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectCard } from './index';

import TempImagePath1 from '@/assets/temp1.png';
import TempImagePath2 from '@/assets/temp2.jpg';
import TempImagePath3 from '@/assets/temp3.jpg';

export default {
  title: 'blocks/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  project: {
    id: '',
    projectTitle: 'PRP(for your portrait right protection)',
    projectDescription:
      '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요!',
    previewImages: [TempImagePath1, TempImagePath2, TempImagePath3],
    projectHashtag: ['React', 'TypeScript', '프론트엔드', 'AWS', 'Next'],
    views: 320,
    likes: 2,
    created: '2023-02-14',
  },
};

export const CardWithDescriptionOverlay = Template.bind({});
CardWithDescriptionOverlay.args = {
  project: {
    id: '',
    projectTitle: 'PRP(for your portrait right protection)',
    projectDescription:
      '업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k 업로드 할 당신의 영상 속 인물들의 초상권을 보호할 수 있도록 이 서비스를 이용해보세요 asnfjnasdn fansf adsj f s f asfdsa f fasdf ;ads jas fsj fjjfjkd fjsadf sdafds fjdsjf afj dsjfafs ;k',
    previewImages: [TempImagePath1, TempImagePath2, TempImagePath3],
    projectHashtag: ['React', 'TypeScript', '프론트엔드', 'AWS', 'Next'],
    views: 320,
    likes: 2,
    created: '2023-02-14',
  },
};
