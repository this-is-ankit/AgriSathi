import React from 'react';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';

const ProfileScreen = () => {
  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="My Farm Profile" />
      <Section>
        <BodyText align="center">Manage your crops and personal settings.</BodyText>
      </Section>
    </ScreenContainer>
  );
};

export default ProfileScreen;

