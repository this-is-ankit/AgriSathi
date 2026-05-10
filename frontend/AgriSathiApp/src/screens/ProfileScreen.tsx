import React from 'react';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { Spacer } from '../components/layout/Spacer';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="My Farm Profile" />
      <Section>
        <BodyText align="center">Manage your crops and personal settings.</BodyText>
        <Spacer size="xl" />
        <PrimaryButton 
          title="Open Settings" 
          onPress={() => navigation.navigate('Settings')} 
        />
      </Section>
    </ScreenContainer>
  );
};

export default ProfileScreen;

