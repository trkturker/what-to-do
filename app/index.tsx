import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { GlassWater, BookOpen, MessageCircle, Music, Wind, Phone, Smile, Globe, RefreshCw, CircleCheckBig, Circle } from 'lucide-react-native';

// Önerileri ikonlarıyla eşleştirelim ki görseldeki gibi zengin dursun
const suggestionsData = [
  { id: 1, text: 'Bir bardak su iç', icon: <GlassWater size={80} color="#3B82F6" />, },
  { id: 2, text: '5 sayfa kitap oku', icon: <BookOpen size={80} color="#8B5CF6" />, },
  { id: 3, text: 'Birine mesaj at', icon: <MessageCircle size={80} color="#10B981" />, },
  { id: 4, text: 'Sevdiğin şarkıyı aç', icon: <Music size={80} color="#F59E0B" />, },
  { id: 5, text: 'Odanı havalandır ve temizle', icon: <Wind size={80} color="#6366F1" />, },
  { id: 6, text: 'Bir arkadaşını ara', icon: <Phone size={80} color="#EC4899" />, },
  { id: 7, text: 'Gülümse', icon: <Smile size={80} color="#EAB308" />, },
  { id: 8, text: 'Yeni bir ülkeyi araştır ve kültürünü öğren ', icon: <Globe size={80} color="#0EA5E9" />, },
];

export default function Home() {
  const [currentSuggestion, setCurrentSuggestion] = useState(suggestionsData[0]);
    const [done, setDone] = useState(false)
  
  const cardScale = useSharedValue(1);
  const cardOpacity = useSharedValue(1);

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cardScale.value }],
      opacity: cardOpacity.value,
    };
  });

  const handleDoneCheck = () => {
    setDone(!done);

    { !done ? getNewSuggestion() : null }
  }

  const getNewSuggestion = () => {
    setTimeout(() => {setDone(false);}, 500);
    

    cardScale.value = withTiming(0.8, { duration: 150 });
    cardOpacity.value = withTiming(0, { duration: 150 }, () => {
      const randomIndex = Math.floor(Math.random() * suggestionsData.length);
      let newSuggestion = suggestionsData[randomIndex];
      
    });

    setTimeout(() => {
       const randomIndex = Math.floor(Math.random() * suggestionsData.length);
       setCurrentSuggestion(suggestionsData[randomIndex]);
       
       cardScale.value = withSpring(1);
       cardOpacity.value = withTiming(1);
    }, 200);
  };

  return (
    <View className="flex-1 bg-gray-50 items-center justify-center font-code pt-10">
      <View className="mb-10">
        <Text className="text-4xl text-gray-800 text-center font-semibold leading-tight">
          Bugün İçin{'\n'}Bir Öneri Seç!
        </Text>
      </View>

      <Animated.View 
        style={[animatedCardStyle]}
        className="bg-white w-96 h-96 rounded-3xl items-center justify-center shadow-xl shadow-gray-200 mb-12 border border-gray-100"
      >
        <View className="items-center space-y-6">
            <View className="bg-blue-50 p-4 rounded-3xl">
                {currentSuggestion.icon}
            </View>
            
            <View className="items-center p-2 gap-2">
                <Text className="text-2xl font-code text-gray-900 text-center px-4 leading-8">
                {currentSuggestion.text}
                </Text>
            </View>
        </View>
      </Animated.View>

      <TouchableOpacity 
        onPress={getNewSuggestion}
        activeOpacity={0.8}
        className="bg-[#FF8865] flex-row items-center justify-center px-8 py-4 rounded-full shadow-lg shadow-orange-200 mb-8 w-64"
      >
        <Text className="text-white font-inter text-lg mr-2">Ne Yapalım?</Text>
        <RefreshCw size={20} color="white" strokeWidth={2.5} />
      </TouchableOpacity>

      <View className="flex-row justify-center items-center w-72 px-4">
        <TouchableOpacity className="flex-row items-center gap-2" onPress={handleDoneCheck}>
            <Text className={`${done ? 'text-green-600' : 'text-gray-400'} font-code font-medium text-base`}>Bunu Yaptım!</Text>
            <View className={`${done ? 'bg-green-600' : 'bg-gray-400'} rounded-full`}>
              { done ? 
                <CircleCheckBig size={20} color="white" /> 
                :
                <Circle size={20} color="white" />
              }
            </View>
        </TouchableOpacity>

      </View>

    </View>
  );
}