import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

const suggestions = [
  '10 dakika yürüyüş yap',
  '1 sayfa kitap oku',
  'Birine mesaj at',
  'Bir bardak su iç',
  'Masanı toparla',
  'Sevdiğin bir şarkıyı aç',
  'Esneme hareketleri yap',
  'Bir arkadaşını ara',
  'Odanı havalandır',
  '5 dakika meditasyon yap',
  'Yeni bir dil öğrenmeye başla',
];

export default function Home() {
  const [suggestion, setSuggestion] = useState('');
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const getSuggestion = () => {
    opacity.value = 0;
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    setSuggestion(suggestions[randomIndex]);
  };

  useEffect(() => {
    if (suggestion) {
      opacity.value = withTiming(1, { duration: 500 });
    }
  }, [suggestion, opacity]);

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Stack.Screen options={{ title: 'Bugün Ne Yapalım?' }} />
      <Container>
        <Animated.View style={animatedStyle}>
          <Text
            style={{ fontFamily: 'Inter_400Regular' }}
            className="text-2xl text-center mb-5 text-white">
            {suggestion || 'Bugün ne yapmak istersin?'}
          </Text>
        </Animated.View>
        <Button title="Bana bir öneri ver!" onPress={getSuggestion} />
      </Container>
    </View>
  );
}
