import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
    const navigation = useNavigation();
    return (
        <View className="bg-white flex-1">
            <View className="relative py-8">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                    className="absolute top-12 left-6 bg-gray-50 p-3 rounded-full">
                        <Icon.ArrowLeft stroke='white' strokeWidth={3} />
                </TouchableOpacity>
            </View>
            <View>
            <Text className=" text-center font-bold text-xl"> About </Text>
            </View>
            <View> 
                <Text className="font-bold text-s ml-5 mt-10"> Product Name: 
                    <Text className="font-normal"> QuickBite</Text>
                </Text>
                <Text className="font-bold text-s ml-5 mt-5"> Developer Name: 
                    <Text className="font-normal"> Rachit Saini</Text>
                </Text>
                <Text className="font-bold text-s ml-5 mt-5"> Elevator Pitch: 
                    <Text className="font-normal"> Introducing "QuickBite," a versatile {"\n"} food delivery app 
                                                    that offers a seamless, personalized {"\n"}dining experience. 
                                                    Users can easily order their favorite {"\n"} dishes from local restaurants, 
                                                    track deliveries in real {"\n"} time, and discover exciting culinary options.
                    </Text>
                </Text>
        
                    <Text className="font-bold text-s ml-5 mt-10"> Learn More here: 
                    <Text className="font-normal" style={{color: 'blue'}} onPress={() => Linking.openURL('https://docs.google.com/spreadsheets/d/1SfezH7jlLGHgP2KMK9qa438HChfKVag7-Tx9KT7iaR0/edit#gid=0')}> Project Proposal </Text>
                </Text>
            </View>
        </View>
        
    )
}