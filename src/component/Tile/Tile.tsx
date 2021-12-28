import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import {
  HandlerStateChangeEvent,
  LongPressGestureHandler,
  State,
} from 'react-native-gesture-handler';
import chroma from 'chroma-js';

import { generateTokenFromSecret } from '@helper/authenticator';
import ProgressBar from '@component/ProgressBar/ProgressBar';
import IconButton from '@component/IconButton/IconButton';
import { Icon, IconSize } from '@component/IconButton/Icons';
import { Account, Uuid } from '@type/account';
import { useDispatch } from '@hook/store';
import { remove } from '@slice/account';

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

const DeleteButtonContainer = styled(View)`
  position: absolute;
  top: 2px;
  left: 10px;
  z-index: 1;
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

enum Mode {
  Normal,
  Reveal,
  Delete,
}

export default function Tile({ account }: TileProps): JSX.Element {
  const dispatch = useDispatch();
  const [token, setToken] = useState(generateTokenFromSecret(account.secret));
  const [mode, setMode] = useState(Mode.Normal);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToken(generateTokenFromSecret(account.secret));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleCopy = () => {
    Clipboard.setString(token.token);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const handleLongPress = (event: HandlerStateChangeEvent<LongPressGestureHandler>) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      if (mode !== Mode.Delete) {
        setMode(Mode.Delete);
      } else {
        setMode(Mode.Normal);
      }
    }
  };

  const handleDelete = (uuid: Uuid) => {
    dispatch(remove(uuid));
    setMode(Mode.Normal);
  };

  return (
    <Wrapper>
      {mode === Mode.Delete && (
        <DeleteButtonContainer>
          <IconButton
            icon={Icon.delete}
            size={IconSize.large}
            onPress={() => handleDelete(account.uuid)}
          />
        </DeleteButtonContainer>
      )}
      <Gradient colors={[chroma(account.color).saturate().hex(), account.color]}>
        <LongPressGestureHandler minDurationMs={300} onHandlerStateChange={handleLongPress}>
          <ContentWrapper>
            <DetailsWrapper>
              <TokenLabel>{token.token}</TokenLabel>
              <UsernameLabel>{account.username}</UsernameLabel>
              <IssuerLabel>{account.issuer}</IssuerLabel>
            </DetailsWrapper>
            <ActionsWrapper>
              <IconButton icon={Icon.copy} size={IconSize.large} onPress={handleCopy} />
            </ActionsWrapper>
          </ContentWrapper>
        </LongPressGestureHandler>
        <ProgressBar timeRemaining={token.timeRemaining} />
      </Gradient>
    </Wrapper>
  );
}
