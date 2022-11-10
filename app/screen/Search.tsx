import { Center, Flex, HStack, Icon, Input, Stack, VStack } from 'native-base'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'


const SearchScreen = () => {
    const numbers = [...Array(20).keys()]

    const screenWidth = Dimensions.get('window').width

    return (
        <ScrollView style={styles.container}>
            <View style={{
                padding: 10,
                top: 25,
                marginBottom: 25
            }}>
                <Input
                    variant={'filled'}
                    borderRadius="2xl"
                    placeholder='Search'
                    size={'lg'}
                    py={0.5}
                    InputLeftElement={<Icon as={Ionicons} name='search-outline' ml={4} color="black" size={'md'} />}
                />
            </View>

            <Flex flexWrap='wrap' direction='row'>
                {numbers.map((item) => (
                    <Image
                        key={item}
                        source={{
                            uri: "https://api.lorem.space/image/game?w=150&h=220"
                        }}
                        style={{
                            width: screenWidth / 3 - 2,
                            height: 124,
                            margin: 1
                        }}
                    />
                ))}
            </Flex>
        </ScrollView >
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
})