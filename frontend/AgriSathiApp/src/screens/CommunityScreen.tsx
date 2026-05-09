import React from 'react';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';

const CommunityScreen = () => {
  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="Community" />
      <Section>
        <BodyText align="center">Connect with local experts and farmers.</BodyText>
      </Section>
    </ScreenContainer>
  );
};

export default CommunityScreen;

