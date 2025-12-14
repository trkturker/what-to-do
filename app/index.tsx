import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

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

  const getSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    setSuggestion(suggestions[randomIndex]);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ title: 'Bugün Ne Yapalım?' }} />
      <Container>
        <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}>
          {suggestion || 'Bugün ne yapmak istersin?'}
        </Text>
        <Button title="Bana bir öneri ver!" onPress={getSuggestion} />
      </Container>
    </View>
  );
}
