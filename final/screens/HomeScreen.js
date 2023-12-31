import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getFeaturedResturants } from '../api';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(() => {
        getFeaturedResturants().then(data=>{
            console.log("Got data:" , data);
            setFeaturedRestaurants(data);
        })
    }, [])

    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content"/>
            {/* Search Bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Fullerton, CA</Text>
                    </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                    <TouchableOpacity onPress={()=> navigation.navigate('About')} >
                        <Icon.Info height="20" width="20" strokeWidth={2.5} stroke="white" />
                    </TouchableOpacity>
                    
                </View>
            </View>

            {/* {main} */}
            <ScrollView showsVerticalScrollIndicator={false} 
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/* {categories} */}
                <Categories/>

                {/* {featured} */}
                <View className="mt-5">
                    {
                        featuredRestaurants.map((item, index) =>{
                            return (
                                <FeaturedRow 
                                    key={index}
                                    title={item.name}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}