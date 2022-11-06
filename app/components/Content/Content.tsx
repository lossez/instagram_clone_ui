import { Avatar, HStack, Icon, Text } from 'native-base'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, ScrollView, View } from 'react-native'
import CommentIcon from '../Icons/CommentIcon'
import PlaneIcon from '../Icons/PlaneIcon'
import BookmarkIcon from '../Icons/BookmarkIcon'
import HearthIcon from '../Icons/HearthIcon'
import { ReadMore } from '../ReadMore/ReadMore'

type Post = {
    username: string,
    description: string,
    uri: string,
    date: string
}
const usernameValue = {
    username: 'name',
}



export const Content = ({ username, description, uri, date }: Post) => {
    // const first = username.split(' ')[0]
    return (
        <View style={{
            paddingBottom: 10
        }}>
            <HStack justifyContent={'space-between'} px="4" pb={3} alignItems={'center'} key={'hstack' + Math.random()}>
                <HStack space={3} alignItems="center" key={'hstack 2' + Math.random()}>
                    <Avatar bg="indigo.500" size={30} source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }} key={'Avatar' + Math.random()} />
                    <Text bold key={'text' + Math.random()}>{username}</Text>
                </HStack>
                <Ionicons key={'ionicons' + Math.random()} name="ellipsis-horizontal" size={22} color="black" />
            </HStack>
            <Image source={{
                uri: uri
            }}
                style={{
                    width: '100%',
                    minHeight: 300,
                    maxHeight: 375
                }}
                key={'image' + Math.random()}
            />
            <HStack justifyContent={'space-between'} px='4' py={3}>
                <HStack space={2}>
                    <HearthIcon />
                    <CommentIcon />
                    <PlaneIcon />
                </HStack>
                <BookmarkIcon />
            </HStack>
            <View style={{
                paddingLeft: 20
            }}
                key={'view 2' + Math.random()}
            >
                <Text key={'text des' + Math.random()}>
                    <Text bold key={'text desc' + Math.random()}>{username} </Text>
                    <ReadMore text={description} key={'readmore' + Math.random()} />
                </Text>
                <Text color={'gray.400'}>View All 289 comments</Text>
                <HStack space={2} alignItems="center" py={2}>
                    <Avatar bg="indigo.500" size={30} source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }} />
                    <Text color={'gray.400'}>Add a comments</Text>
                </HStack>
            </View>
        </View>
    )
}