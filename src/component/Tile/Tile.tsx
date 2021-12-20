import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { NotificationFeedbackType } from 'expo-haptics';
import {
  Directions,
  FlingGestureHandler,
  FlingGestureHandlerEventPayload,
  HandlerStateChangeEvent,
  LongPressGestureHandler,
  State,
} from 'react-native-gesture-handler';
import chroma from 'chroma-js';

import { generateTokenFromSecret } from '@helper/authenticator';
import ProgressBar from '@component/ProgressBar/ProgressBar';
import IconButton from '@component/IconButton/IconButton';
import { Icon, IconSize } from '@component/IconButton/Icons';
import { Account } from '@type/account';

const Wrapper = styled(View)`
  width: 100%;
  padding: 10px 17px 0 17px;
`;

const Gradient = styled(LinearGradient)`
  border-radius: 17px;
  padding: 15px;
  width: 100%;
  height: 120px;
`;

const ContentWrapper = styled(View)`
  flex-direction: row;
`;

const DetailsWrapper = styled(View)`
  width: 90%;
`;

const ActionsWrapper = styled(View)`
  justify-content: center;
`;

const TokenLabel = styled(Text)`
  font-size: 40px;
  line-height: 48px;
  font-weight: 900;
  color: white;
`;

const UsernameLabel = styled(Text)`
  color: white;
  font-weight: 500;
`;

const IssuerLabel = styled(Text)`
  color: white;
  font-weight: 700;
`;

interface TileProps {
  account: Account;
}

export default function Tile({ account }: TileProps): JSX.Element {
  const [token, setToken] = useState(generateTokenFromSecret(account.secret));
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToken(generateTokenFromSecret(account.secret));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleFling = (event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setHidden(!hidden);
    }
  };

  const handleLongPress = (event: HandlerStateChangeEvent<LongPressGestureHandler>) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.log('long press');
    }
  };

  const handleCopy = () => {
    Clipboard.setString(token.token);
    Haptics.notificationAsync(NotificationFeedbackType.Success);
  };

  return (
    <Wrapper>
      <Gradient colors={[chroma(account.color).saturate().hex(), account.color]}>
        <FlingGestureHandler
          direction={Directions.RIGHT | Directions.LEFT}
          onHandlerStateChange={handleFling}
        >
          <LongPressGestureHandler minDurationMs={800} onHandlerStateChange={handleLongPress}>
            <ContentWrapper>
              <DetailsWrapper>
                <TokenLabel>{hidden ? '******' : token.token}</TokenLabel>
                <UsernameLabel>{account.username}</UsernameLabel>
                <IssuerLabel>{account.issuer}</IssuerLabel>
              </DetailsWrapper>
              <ActionsWrapper>
                <IconButton icon={Icon.copy} size={IconSize.large} onPress={handleCopy} />
              </ActionsWrapper>
            </ContentWrapper>
          </LongPressGestureHandler>
        </FlingGestureHandler>
        <ProgressBar timeRemaining={token.timeRemaining} />
      </Gradient>
    </Wrapper>
  );
}
