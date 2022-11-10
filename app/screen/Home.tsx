import { useIsFocused } from '@react-navigation/native';
import { Center, HStack, Avatar, Divider, Text, FlatList, } from 'native-base'
import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { AvatarGradient } from '../components/Avatar/Avatar';
import { Content } from '../components/Content/Content';
const HomeScreen = () => {
    const [dataStory, setDataStory] = React.useState<any>([]);
    const [dataPosts, setDataPosts] = React.useState<any>([]);
    const isFocussed = useIsFocused();
    const [totalRender, setTotalRender] = React.useState(3);

    React.useEffect(() => {
        if (isFocussed) {
            fetch('https://randomuser.me/api/?results=6')
                .then(res => res.json())
                .then(data => setDataStory(data.results))
        }
    }, [isFocussed])

    React.useEffect(() => {
        if (isFocussed) {
            fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=637426c308054589b1dcc3e39c3d9e2a')
                .then(res => res.json())
                .then(data => setDataPosts(data.articles))
        }
    }, [isFocussed])

    return (
        <View style={styles.container}>

            <FlatList data={dataPosts}
                initialNumToRender={totalRender}
                maxToRenderPerBatch={totalRender * 2}
                onEndReached={() => {
                    setTotalRender(totalRender + 1)
                }}
                renderItem={({ item }) =>
                    <Content
                        key={'content' + Math.random()}
                        username={item.author}
                        description={item.description}
                        uri={item.urlToImage}
                        publishedAt={item.publishedAt}
                    />
                }
                ListHeaderComponent={
                    <View key={Math.random()}>
                        <FlatList
                            py={4}
                            showsHorizontalScrollIndicator={false}
                            horizontal data={dataStory} renderItem={({ item }) =>
                                <AvatarGradient
                                    uri={item.picture.medium}
                                    name={item.name.first}
                                    key={Math.random()} />
                            } keyExtractor={item => Math.random().toString()}

                        // ListFooterComponent={() =>
                        //     // <Text key={Math.random()}>Baksow</Text>
                        //     <Divider color={'gray.800'} key={Math.random()} />

                        // }
                        // ListFooterComponentStyle={{
                        //     // flexGrow: 1,
                        //     width: '100%',
                        //     bottom: 0,
                        //     // paddingTop: 100,
                        //     position: 'absolute'
                        // }}
                        />
                    </View>

                }
                keyExtractor={item => Math.random().toString()} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },


})