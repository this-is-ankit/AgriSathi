import React from 'react';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';

const AlertsScreen = () => {
  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="Weather & Alerts" />
      <Section>
        <BodyText align="center">Local weather forecasts and farming alerts.</BodyText>
      </Section>
    </ScreenContainer>
  );
};

export default AlertsScreen;

