import React from 'react';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';

const ScanScreen = () => {
  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="Crop Scan" />
      <Section>
        <BodyText align="center">Take a photo of your crop to detect diseases.</BodyText>
      </Section>
    </ScreenContainer>
  );
};

export default ScanScreen;

